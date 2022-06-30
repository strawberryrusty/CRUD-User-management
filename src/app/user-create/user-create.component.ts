import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersDataService } from '../users-data.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor( private fb: FormBuilder,
    private userService : UsersDataService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {

    this.newUserForm = this.fb.group({
    userId: Math.floor(1000 + Math.random() * 9000).toString(),
    firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
    lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
    birthPlace: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]]
  });
  }

    get firstName()
  {
    return this.newUserForm.get('firstName')
  }

    get lastName()
  {
    return this.newUserForm.get('lastName')
  }


    get birthPlace()
  {
    return this.newUserForm.get('birthPlace')
  }

  onSubmit(){
  console.log(this.newUserForm);
  const newUserFormData = this.newUserForm.value;
  console.log(newUserFormData);
  this.userService.addUser(newUserFormData);
  this.router.navigate(['../']);
 }

}


