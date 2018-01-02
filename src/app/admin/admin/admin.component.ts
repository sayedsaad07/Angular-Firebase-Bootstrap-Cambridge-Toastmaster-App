import { Component, OnInit } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/auth.service";
import { UserInfo } from "../../shared/user-info";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
    ngOnInit(): void {
        this.isIn = false;
        
    }
  private isstarted: boolean = false;
  private alertType = null;
  private alertMessage = "";
  isLoggedIn = new BehaviorSubject<boolean>(false);

  isIn = false;   // store state
  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false;
      console.log("is in value" + this.isIn);
  }
  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn().subscribe(this.isLoggedIn);
  }

  currentUser(): Observable<UserInfo> {
    return this.authService.currentUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onResetPasswordSuccess() {
    this.alertType = "success";
    this.alertMessage = "Reset Password Sent!";
  }

  onLoginSuccess() {
    this.alertType = "success";
    this.alertMessage = "Login Success!";
  }

  onRegisterSuccess() {
    this.alertType = "success";
    this.alertMessage = "User registered!";
  }

  onError(err) {
    this.alertType = "danger";
    this.alertMessage = err;
  }

  onLoggedOut() {
    // Just reset any displayed messsage.
    this.alertType = null;
    this.alertMessage = "";
  }

  alertClosed() {
    this.alertType = null;
    this.alertMessage = "";
  }
}
