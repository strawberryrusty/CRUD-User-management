import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  usersData: any[] = [
    {userId: '1123', firstName: 'james', lastName: 'Johnson', dateOfBirth: '8th April', birthPlace: 'London'},
    {userId: '1125', firstName: 'fred', lastName: 'kind', dateOfBirth: '7th April', birthPlace: 'Madrid'},
  ];

  userChanged = new Subject<void>();

  //get all users
  getUsersData(): Observable<any[]> {
    let users = this.usersData.slice();
    return of(users);
  }

  //get user by id
  getUserDatabyId(id: string): Observable<any> {
  let user = this.usersData.find((x) => (x.userId === id));
  return of(user);
  }

  //update userdata
  updateUserData(data: any): Observable<any[]> {
      const pos = this.usersData.findIndex((user) => {
      return user.userId === data.userId;
    })
    this.usersData[pos].firstName = data.firstName;
    this.usersData[pos].lastName = data.lastName;
    // return this.usersData;

    //placeholder to return a value of the type observable
    let users = this.usersData.slice();
    return of(users);
  }

  addUser( data: any) {

    const newUser = { userId: data.userId, firstName: data.firstName, lastName: data.lastName, birthPlace: data.birthPlace };
    this.usersData.push(newUser);
  }

  constructor() { }
}
