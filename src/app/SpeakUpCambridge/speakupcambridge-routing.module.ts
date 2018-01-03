import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoggedInGuard } from '../shared/logged-in-guard';
import { AuthService } from '../shared/auth.service';
import { EventListComponent, EventEditComponent } from './event-list.index';


const adminRoutes: Routes = [
    {
        path: 'events'
        //, canActivateChild: [LoggedInGuard]//, component: EventListComponent, canActivate: [LoggedInGuard]
        , children: [
            { path: 'list', component: EventListComponent, canActivate: [LoggedInGuard] }
            , { path: 'edit/:id', component: EventEditComponent, canActivate: [LoggedInGuard] }
            , {
                path: 'add', redirectTo: 'edit/new'
            } //component: EventEditComponent, canActivate: [LoggedInGuard] }
            , { path: '', component: EventListComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class SpeakupCambridgeRoutingModule { }

