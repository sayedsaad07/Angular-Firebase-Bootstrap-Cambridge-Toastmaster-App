import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages-entry/home/home.component';
import { ErrorComponent } from './pages-entry/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
