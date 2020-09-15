import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module'
import {UserModule} from './pages/user/user.module'
import {LayoutsModule} from './shared/layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
