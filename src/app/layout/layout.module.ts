import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTopComponent } from './content-top/content-top.component';
import { MenuComponent } from './menu/menu.component';
import { PageTopComponent } from './page-top/page-top.component';
import { RightConfigComponent } from './right-config/right-config.component';
import { RightTopComponent } from './right-top/right-top.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    ContentTopComponent, 
    MenuComponent, 
    PageTopComponent, 
    RightConfigComponent, 
    RightTopComponent, 
    SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { 
  
}
