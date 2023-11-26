import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  bLoading: boolean = false;
  bError: boolean = false;
  _error: string = "Request time out; please try again later.";

  private handleError(error: HttpErrorResponse) {

    const customMessage = 'Request time out; please try again later.';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      console.error("ERROR MESSAGE: " + error.message);
      console.error("ERROR CODE: " + error.status);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Request time out; please try again later.'));
  }

  getData(country: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.api_url}` + country)
    .pipe(retry(3), //retry failed request (max 3 retries)
    catchError(this.handleError)); //call the error handler above
  }

}
