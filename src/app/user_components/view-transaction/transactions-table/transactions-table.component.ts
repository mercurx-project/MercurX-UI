import {Component} from '@angular/core';
import * as data from '../../../shared/data/data/table/bootstrap-table';
import {CommonModule} from "@angular/common";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpService} from "../../../http.service";

@Component({
    selector: 'app-transaction-table',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './transactions-table.component.html',
    styleUrls: ['./transactions-table.component.scss']
})

export class TransactionsTableComponent {

    public tableData = data.basicTableBottomColor;
    transactionList: any[] = [];
    errorMessage: string = '';
    constructor( private httpService: HttpService) {
        this.loadTransactionsData();
    }

    public loadTransactionsData() {
        this.httpService.getData('transaction/all')
            .subscribe({
                next: (data) => {
                    this.transactionList = data;
                    this.errorMessage = '';
                },
                error: (err) => {
                    this.errorMessage = 'Error fetching transactions: ' + err.message;
                    console.error('API error:', err);  // Log the error for debugging
                }
            });
    }

}
