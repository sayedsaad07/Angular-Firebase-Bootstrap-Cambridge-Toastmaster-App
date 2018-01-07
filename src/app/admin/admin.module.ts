import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DisplayUserComponent } from './display-user/display-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomePageComponent } from './pages/home-page.component';
import { RegisterPageComponent } from './pages/register-page.component';
import { LoginPageComponent } from './pages/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { AllInOnePageComponent } from './pages/all-in-one-page.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [
    DisplayUserComponent,
    LoginUserComponent,
    RegisterUserComponent,
    ResetPasswordComponent,
    HomePageComponent,
    RegisterPageComponent,
    AllInOnePageComponent,
    LoginPageComponent,
    DashboardPageComponent,
    AdminComponent]
  , providers: []
    , exports: [RouterModule]
})
export class AdminModule { }
