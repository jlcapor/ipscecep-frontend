import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';



@NgModule({
  declarations: [
    PagesComponent,
    UpdateUserComponent, 
    CreateUserComponent, ListUserComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
