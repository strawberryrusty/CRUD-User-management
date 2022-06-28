import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {

    this.newUserForm = this.fb.group({
    userId: Math.floor(1000 + Math.random() * 9000),
    firstName: [''],
    lastName: ['']
  });
  }

     onSubmit(){
      console.log(this.newUserForm);
    }

}
