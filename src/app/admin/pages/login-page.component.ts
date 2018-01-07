import {Component} from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import {Router} from "@angular/router";
import { AuthService } from "../../shared/auth.service";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    isLoggedIn = new BehaviorSubject<boolean>(false);

    constructor(private authService: AuthService, private router: Router) {
        this.authService.isLoggedIn().subscribe(this.isLoggedIn);
        this.isLoggedIn.subscribe(val => {
            if (val == true) {
                this.router.navigate(['/admin']);
            }
        });
    }

    navigateToResetPassword($event) {
        this.router.navigate(['/admin/reset-password']);
    }
    navigateToRegister() {
        this.router.navigate(['/admin/register']);
    }
    navigateToHome() {
        this.router.navigate(['/admin/events']);
    }
}
