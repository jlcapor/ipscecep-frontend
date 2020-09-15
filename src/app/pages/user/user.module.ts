import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import {ListUserComponent} from './list-user/list-user.component';
import {UpdateUserComponent} from './update-user/update-user.component'


@NgModule({
  declarations: [
  CreateUserComponent,
  ListUserComponent,
  UpdateUserComponent
],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
