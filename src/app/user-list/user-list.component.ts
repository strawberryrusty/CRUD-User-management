import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { UsersDataService } from '../users-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  rowData: any[] = [];
  userService : UsersDataService;

  colDefs: ColDef[] = [
    {field: 'userId'},
    {field: 'firstName'},
    {field: 'lastName'},
    {field: 'dateOfBirth'},
     {field: 'birthPlace'}
  ];

  constructor(userService : UsersDataService) {
    this.userService = new UsersDataService;
  }


  ngOnInit(): void {
    this.rowData = this.userService.getUsersData();
  }

}
