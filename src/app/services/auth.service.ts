import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
  registerCandidate(candidate): Observable<any> {

    return this.http.post(`${environment.apiUrl}/api/User/user/register`, JSON.stringify(candidate), this.httpOptions).pipe(retry(2));
  }

  login(user): Observable<any> {
    return this.http.post<any[]>(`${environment.apiUrl}/api/User/user/login`, JSON.stringify(user), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  getData(urlApi, heders) {
    return this.http.get(`${environment.apiUrl}${urlApi}`, heders).pipe(retry(2));
  }

  postData(urlApi, postBody, header) {
    return this.http.post(`${environment.apiUrl}${urlApi}`, JSON.stringify(postBody), header).pipe(retry(2), retry(2),
      catchError(this.handleError));
  }
}
