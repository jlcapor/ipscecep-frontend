import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ContentTopComponent } from './content-top/content-top.component';
import { PagesTopComponent } from './pages-top/pages-top.component';
import { RightConfigComponent } from './right-config/right-config.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [MenuComponent, ContentTopComponent, PagesTopComponent, RightConfigComponent, SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
