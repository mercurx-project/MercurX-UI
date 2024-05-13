import {Component} from '@angular/core';
import * as data from '../../../shared/data/data/table/bootstrap-table';
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-basic-table-with-border-bottom-color',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent {

    public tableData = data.basicTableBottomColor;

}
