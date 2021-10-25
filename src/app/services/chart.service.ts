import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  getData(urlApi, heders) {
    return this.http.get(`${environment.apiUrl}${urlApi}`, heders).pipe(retry(2));
  }
}
