import { Component } from '@angular/core';
import {
  UsersListComponent
} from "./basic-table-with-border-bottom-color/users-list.component";

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [UsersListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
