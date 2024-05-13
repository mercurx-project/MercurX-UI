import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpService} from "../../../http.service";

@Component({
    selector: 'app-form-validations',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './transaction-form.component.html',
    styleUrls: ['./transaction-form.component.scss']
})

export class TransactionFormComponent {

    public validate = false;
    transactionResponse: any[] = [];
    errorMessage: string = '';
    userForm: FormGroup;

    constructor(private fb: FormBuilder, public router: Router, private httpService: HttpService) {
        this.userForm = this.fb.group({
            senderAccount: ['', Validators.required],
            receiverAccount: ['', Validators.required],
            asset: ['', Validators.required],
            quantity: ['', Validators.required],
            attachment: [''],
            description: [''],
        });
    }

    public submit() {
        this.httpService.postData('transaction', this.userForm.value)
            .subscribe({
                next: (data) => {
                    this.transactionResponse = data;
                    this.errorMessage = '';
                },
                error: (err) => {
                    this.errorMessage = 'Error fetching users: ' + err.message;
                    console.error('API error:', err);  // Log the error for debugging
                }
            });


        if (this.userForm.valid) {
            const formData = this.userForm.value;
            // Submit the form data via a service (e.g., HttpClient)
            console.log('Form data submitted:', formData);
        } else {
            // Handle form validation errors
            console.log('Form is invalid. Please check the fields.');
        }
    }
}
