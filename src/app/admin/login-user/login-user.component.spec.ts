/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {LoginUserComponent} from "./login-user.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {AsyncSubject, Observable, ReplaySubject} from "rxjs";
import { AuthService } from "../../shared/auth.service";
import { AuthServiceStub } from "../../shared/auth.service.stub";

describe('LoginUserComponent', () => {
    let component: LoginUserComponent;
    let fixture: ComponentFixture<LoginUserComponent>;

    beforeEach(async(() => {
        let _AuthServiceStub = new AuthServiceStub(true);

        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [LoginUserComponent],
            providers: [
                {provide: AuthService, useValue: AuthServiceStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
