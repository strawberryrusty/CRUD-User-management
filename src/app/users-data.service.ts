import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  usersData: any[] = [
    {userId: '1123', firstName: 'james', lastName: 'stevenson', dateOfBirth: '8th April', birthPlace: 'London'},
    {userId: '1125', firstName: 'fred', lastName: 'kind', dateOfBirth: '7th April', birthPlace: 'Madrid'},
  ];

  getUsersData(): Observable<any[]> {
    let users = this.usersData.slice();
    return of(users);
  }

  getUserDatabyId(id: string): Observable<any> {
  let user = this.usersData.find(x => {x.userId === id});
  return of(user);

  }

  constructor() { }
}
