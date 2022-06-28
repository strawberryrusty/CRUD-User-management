import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CellDoubleClickedEvent, ColDef, RowAnimationCssClasses } from 'ag-grid-community';
import { UsersDataService } from '../users-data.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  rowData: any[] = [];
  usersData = [];
  // subscription : Subscription;

  colDefs: ColDef[] = [
    {field: 'userId'},
    {field: 'firstName'},
    {field: 'lastName'},
    // {field: 'dateOfBirth'},
     {field: 'birthPlace'}
  ];

  constructor(private userService : UsersDataService, private router: Router) {}

  ngOnInit(): void {
    //simple way to get services
    // this.rowData = this.userService.getUsersData();

    //subscribing to an observable to get all data:
    this.userService.getUsersData().subscribe(
      (res) => {
        console.log(res);
        this.rowData = res;
      }
    );
  }

  onCellDoubleClicked(event: CellDoubleClickedEvent){
    //navigate to detail page
    console.log(event);
    const userId = event.data.userId;
     this.router.navigate(['users', userId]);
  }

}
