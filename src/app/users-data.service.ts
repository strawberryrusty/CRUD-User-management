import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  usersData: any[] = [
    {userId: '1123', firstName: 'james', lastName: 'stevenson', dateOfBirth: '8th April', birthPlace: 'London'},
    {userId: '1125', firstName: 'fred', lastName: 'kind', dateOfBirth: '7th April', birthPlace: 'Madrid'},
  ];

  getUsersData() {
    let users = this.usersData.slice();
    return users;
  }

  getUserDatabyId(id: string){
  this.usersData.find(x => {x.userId === id});
  }

  constructor() { }
}
