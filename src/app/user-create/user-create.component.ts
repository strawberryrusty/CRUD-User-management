import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  } from '@angular/forms';
import { UsersDataService } from '../users-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor( private fb: FormBuilder, private userService : UsersDataService, private location: Location) { }

  ngOnInit(): void {

    this.newUserForm = this.fb.group({
    userId: Math.floor(1000 + Math.random() * 9000).toString(),
    firstName: [''],
    lastName: [''],
    birthPlace: ['']
  });

  }

  onSubmit(){
  console.log(this.newUserForm);
  const newUserFormData = this.newUserForm.value;
  console.log(newUserFormData);
  this.userService.addUser(newUserFormData);
  this.location.back();

 }

}
