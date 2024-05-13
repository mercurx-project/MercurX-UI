import { Component } from '@angular/core';
import {TransactionFormComponent} from "./form-validations/transaction-form.component";


@Component({
  selector: 'app-documents',
  standalone: true,
    imports: [
        TransactionFormComponent
    ],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {

}
