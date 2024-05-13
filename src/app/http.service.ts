import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";

const API_URL = 'http://localhost:8080/api/';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

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
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
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
}
