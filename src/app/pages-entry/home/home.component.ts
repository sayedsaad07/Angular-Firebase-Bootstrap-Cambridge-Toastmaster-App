import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public modelRef: BsModalRef;
  constructor(private modelService: BsModalService) { }

  ngOnInit() {
  }

  register(email: string) {
    console.log(email + "Subscribed successfully");
    this.modelRef.hide();
  }

  registeremail(registeremailtemplate: TemplateRef<any>) {
    this.modelRef = this.modelService.show(registeremailtemplate);
  }
}
