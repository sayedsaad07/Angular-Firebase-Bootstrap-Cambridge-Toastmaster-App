import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
    
  }


  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoAdmin() {
      
      this.router.navigate(['/admin']);
      console.log("user click main admin menu");
  }
}
