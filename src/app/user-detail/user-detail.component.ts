import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, switchMap, map} from 'rxjs';
import { UsersDataService } from '../users-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user$!: Observable<any>;
  reactiveForm!: FormGroup;
  form$!: Observable<FormGroup>;
  userObj = {};
  list!: Array<Element>;

  constructor( private route: ActivatedRoute, private router: Router, private userService : UsersDataService, private fb: FormBuilder, private location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (res) => {
        console.log(res);
        let userIdNumber : string = res['id'];
        console.log(userIdNumber, typeof(userIdNumber));
        this.user$ = this.userService.getUserDatabyId(userIdNumber);
        this.user$.subscribe((res) => {
          this.userObj = res;
          this.reactiveForm = this.fb.group({
            userId: [res.userId],
            firstName: [res.firstName],
            lastName: [res.lastName],
            birthPlace: [res.birthPlace]
          })
        })
        console.log(this.userObj);
      }
    )
  }

   onSubmit(){
      console.log(this.reactiveForm);
      const userFormData = this.reactiveForm.value
      this.userService.updateUserData(userFormData);
      //you can subscribe to this line above and put a console log as a sucess and check the data etc

      this.location.back();

    }
}
