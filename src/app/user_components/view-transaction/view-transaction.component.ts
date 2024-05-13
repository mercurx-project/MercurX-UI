import { Component } from '@angular/core';
import {TransactionsTableComponent} from "./transactions-table/transactions-table.component";

@Component({
  selector: 'app-view-transaction',
  standalone: true,
    imports: [
        TransactionsTableComponent
    ],
  templateUrl: './view-transaction.component.html',
  styleUrl: './view-transaction.component.scss'
})
export class ViewTransactionComponent {

}
