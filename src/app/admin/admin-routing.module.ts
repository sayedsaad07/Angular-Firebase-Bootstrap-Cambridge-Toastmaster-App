import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomePageComponent } from './pages/home-page.component';
import { RegisterPageComponent } from './pages/register-page.component';
import { LoginPageComponent } from './pages/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { AllInOnePageComponent } from './pages/all-in-one-page.component';

import { LoggedInGuard } from '../shared/logged-in-guard';
import { AuthService } from '../shared/auth.service';


const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'register', component: RegisterPageComponent },
      { path: 'all-in-one', component: AllInOnePageComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'dashboard', component: DashboardPageComponent, canActivate: [LoggedInGuard] },
      { path: '', component: HomePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

