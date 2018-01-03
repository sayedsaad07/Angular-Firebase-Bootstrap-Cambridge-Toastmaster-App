import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoggedInGuard } from '../shared/logged-in-guard';
import { AuthService } from '../shared/auth.service';

import { firebaseConfig } from '../../environments/firebaseConfig';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SpeakupCambridgeRoutingModule } from './speakupcambridge-routing.module';
import { EventListComponent, EventEditComponent, EventAttendeeComponent, EventAttendeeEditComponent } from './event-list.index';
import { AddonTimerComponent } from '../shared/timer/addon-timer/addon-timer.component';
import { EventAudianceService } from './event-audiance.service';
import { EventListService } from './event-list.service';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(firebaseConfig, "speak-up-cambridge"),
        AngularFireDatabaseModule,
        AngularFireAuthModule
        //,SpeakupCambridgeRoutingModule
    ],
    declarations: [
        EventListComponent
        , EventEditComponent
        , EventAttendeeComponent
        , EventAttendeeEditComponent
        , AddonTimerComponent
    ]
    , providers: [EventAudianceService
                , EventListService]
    , exports: [EventListComponent, EventEditComponent, EventAttendeeComponent, EventAttendeeEditComponent]
})
export class SpeakupCambridgeModule { }
