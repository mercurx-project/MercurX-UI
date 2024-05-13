import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { UsersRoutingModule } from "./users-routing.module";

import { UserProfileComponent } from "./user-profile/user-profile.component";


@NgModule({
  declarations: [
    UserProfileComponent,

  ],
  imports: [CommonModule, UsersRoutingModule , SharedModule],
  exports: [],
})
export class UsersModule {}
