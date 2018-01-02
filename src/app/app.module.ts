import { firebaseConfig } from "../environments/firebaseConfig";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages-entry/home/home.component';
import { ErrorComponent } from './pages-entry/error/error.component';

import { AdminModule } from './admin/admin.module';
import { AppBootstrapModule } from "./app-bootstrap/app-bootstrap.module";

@NgModule({
  declarations: [
    AppComponent
    ,
    NavbarComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
