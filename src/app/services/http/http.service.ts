import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import * as sourceType from '../../source-type-interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  dataAccessApiUrl = 'http://localhost:8080/dataAccess/dataenvelopes/search';  // URL to data access api search
  private handleError: HandleError;

  constructor(
    private http: HttpClient) {
  }

  searchDataEnvelope (sourceType: sourceType.Copernicus): Observable<sourceType.Copernicus> {
    return this.http.post<sourceType.Copernicus>(this.dataAccessApiUrl, sourceType, httpOptions)
      .pipe(
        catchError(this.handleError('searchDataEnvelope', sourceType))
      );
  }

}
