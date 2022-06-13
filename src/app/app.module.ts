import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersDataService } from './users-data.service';
import { RouterModule } from '@angular/router';

// const routes = [
//   { path: 'users', component: UserListComponent, children: [
//     { path: '', redirectTo: 'users', pathMatch: 'full' },
//     { path: ':id', component: UserDetailComponent }
//   ] }];

const routes = [
 { path: '', redirectTo: 'users', pathMatch: 'full' },
 { path: 'users/:id', component: UserDetailComponent},
 { path: 'users', component: UserListComponent },
// { path: 'users/:id', component: UserDetailComponent, outlet: 'userDetails' }
];
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AgGridModule,
    RouterModule.forRoot(routes)

  ],
  providers: [UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
