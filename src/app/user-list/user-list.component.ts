import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  rowData: any[] = [
    {userId: '1123', firstName: 'james', lastName: 'stevenson', dateOfBirth: '8th April', birthPlace: 'London'},
    {userId: '1125', firstName: 'fred', lastName: 'kind', dateOfBirth: '7th April', birthPlace: 'Madrid'},
  ];

  colDefs: ColDef[] = [
    {field: 'userId'},
    {field: 'firstName'},
    {field: 'lastName'},
    {field: 'dateOfBirth'},
     {field: 'birthPlace'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
