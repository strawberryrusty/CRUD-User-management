import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, switchMap, map} from 'rxjs';
import { UsersDataService } from '../users-data.service';

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



  constructor( private route: ActivatedRoute, private router: Router, private userService : UsersDataService, private fb: FormBuilder) {}
  // 1. whether you have an id or not
   // if you dont have id, you need to render a form to create a new user
   //if you have a id you need to fetch user data of data id from data service
   //once you get this data, bind/show the data in the form and let user edit and save.
   // when the user press save, show show confirm button overlay and if user confirm, save DATA in the data service, and then nagivate back to the user list page.

  ngOnInit(): void {

    //   this.route.params.subscribe(
    //   (res) => {
    //     console.log(res);
    //     let userIdNumber : string = res['id'];
    //     console.log(userIdNumber);
    //     this.user$ = this.userService.getUserDatabyId(userIdNumber).pipe(map((list: Array<Element>)  => {
    //     this.list = list;
    //     }));
    //     console.log(this.list);
    //     console.log(this.user$);
    //   }
    // )

          this.route.params.subscribe(
      (res) => {
        console.log(res);
        let userIdNumber : string = res['id'];
        console.log(userIdNumber);
        this.user$ = this.userService.getUserDatabyId(userIdNumber);
        this.user$.subscribe((res) => {
          this.userObj = res;
          this.reactiveForm = this.fb.group({
            formFirstName: [res.firstName],
            formLastName: [res.lastName]
          })
        })
        console.log(this.userObj);
      }
    )
  }

   onSubmit(){
      console.log(this.reactiveForm);

    }



    //use the activatedroute, router put as dependancy injecting here:
    // this.router.something(url, (params) => {
    // const id = param.id
    // use that id to fetch data for that user from the data service
    //then render the data in the template
    //})

    //  onSubmit(){
    //   console.log(this.reactiveForm);
    // }

}
