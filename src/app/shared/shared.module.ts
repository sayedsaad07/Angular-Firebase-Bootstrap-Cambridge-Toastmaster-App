import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { LoggedInGuard } from './logged-in-guard';

import { firebaseConfig } from '../../environments/firebaseConfig';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { AddonTimerComponent } from './timer/addon-timer/addon-timer.component';
import { AppTimerService } from './timer/app-timer.service';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig, "speak-up-cambridge"),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    declarations: []
    , providers: [AuthService, LoggedInGuard]
    , exports: []
})
export class SharedModule { }
