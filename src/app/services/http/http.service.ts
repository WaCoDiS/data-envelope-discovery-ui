import { Injectable } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';
import * as sourceType from '../../source-type-interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  dataAccessApiUrl = 'http://localhost:8080/dataAccess/dataenvelopes/search';  // URL to data access api search

  constructor(
    private http: HttpClient) {
  }

  searchDataEnvelope (dataEnvelope: sourceType.DataEnvelope): Observable<sourceType.DataEnvelope[]> {
    return this.http.post<sourceType.DataEnvelope[]>(this.dataAccessApiUrl, dataEnvelope, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
