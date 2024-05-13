import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthHttpService} from "./auth-http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public show: boolean = false;
  public loginForm: FormGroup;
  userData: any;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, public router: Router, private authService: AuthHttpService) {
    const userData = localStorage.getItem('user');
      if(userData?.length != null){
        router.navigate(['/dashboard'])
      }
      
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });

  }

  ngOnInit() { }

  showPassword() {
    this.show = !this.show;
  }

  //[TODO] this is a sample test method to call auth http server to validate the server connection

  login() {

    if (this.loginForm.value["email"] !== "" && this.loginForm.value["password"] !== "") {
      let user = {
        password:this.loginForm.value["password"],
        username: this.loginForm.value["email"],
      };
      this.authService.authenticateUser(user);
      localStorage.setItem("user", JSON.stringify(user));

    }
  }



}
