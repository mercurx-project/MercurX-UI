import { Component } from '@angular/core';
import {UserEditsComponent} from "../user-edits/user-edits.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']

})
export class UserProfileComponent {

  constructor(private modalService: NgbModal) {}
  editProfile() {
    const modalRef = this.modalService.open(UserEditsComponent, {
      size: "lg",
    });
  }

}
