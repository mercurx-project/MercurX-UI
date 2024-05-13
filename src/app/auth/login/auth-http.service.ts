import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Router} from "@angular/router";

const API_URL = 'http://localhost:8080/api/authentication/';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  userData: any;
  errorMessage: string = '';
  constructor(public router: Router,private http: HttpClient) { }

  getData(endpoint: string): Observable<any> {
    const url = `${API_URL}${endpoint}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this.http.get(url, { headers })
        .pipe(
            map(response => response),
            catchError(this.handleError)
        );
  }

  postData(endpoint: string, data: any): Observable<any> {
    const url = `${API_URL}${endpoint}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, data, { headers })
        .pipe(
            map(response => response),
            catchError(this.handleError)
        );
  }

  private handleError(error: any): Observable<any> {
    console.error('API error:', error);
    return throwError(error);
  }

  public getUserRoles(): any {
    return this.userData !== undefined ? this.userData['ROLE']: localStorage.getItem('role');
  }

  authenticateUser(data: any) {
    this.postData('login', data)
        .subscribe({
          next: (data) => {
            this.userData = data;
            if (this.userData['JWT'] != "" && this.userData['JWT'] != null) {
              localStorage.setItem('auth', this.userData['JWT']);
              localStorage.setItem('role', this.userData['ROLE']);
              localStorage.setItem('user_name', this.userData['USER']);
              localStorage.setItem('currentUser', this.userData);
              this.router.navigate(["/transaction"]);
            }
            this.errorMessage = 'Error in authenticating';
            this.errorMessage = '';
          },
          error: (err) => {
            this.errorMessage = 'Error in authenticating: ' + err.message;
            console.error('API error:', err);  // Log the error for debugging
          }
        });
  }
}
