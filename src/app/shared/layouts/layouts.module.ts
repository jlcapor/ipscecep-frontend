import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTopComponent } from './content-top/content-top.component';
import { MenuComponent } from './menu/menu.component';
import { PagesTopComponent } from './pages-top/pages-top.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
     ContentTopComponent,
     MenuComponent, 
     PagesTopComponent, 
     SidebarComponent, NavbarComponent
    ],
  exports:[
    ContentTopComponent,
    MenuComponent, 
    PagesTopComponent, 
    SidebarComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LayoutsModule { }
