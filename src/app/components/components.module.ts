import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';



@NgModule({
  declarations: [CreateUserComponent, UpdateUserComponent, ListUserComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
