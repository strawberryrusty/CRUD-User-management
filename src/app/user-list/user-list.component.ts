import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CellDoubleClickedEvent, ColDef } from 'ag-grid-community';
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

  constructor(userService : UsersDataService, private router: Router) {
    this.userService = new UsersDataService;
  }


  ngOnInit(): void {
    this.rowData = this.userService.getUsersData();
  }

  onCellDoubleClicked(event: CellDoubleClickedEvent){
    //navigate to detail page
    console.log(event);
    const userId = event.data.userId;
    this.router.navigate(['/users', {id: userId}]);
  }

}
