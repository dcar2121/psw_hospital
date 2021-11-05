import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalSettings } from '../global';
import { PatientFeedbacks } from '../shared/patient-feedback';

@Injectable({
  providedIn: 'root',
})
export class PatientFeedbackService {
    
    feedbackUrl = GlobalSettings.baseUrl + "/api/Feedback";

    constructor(private http: HttpClient) { }

    getMethod(): Observable<PatientFeedbacks> {      
        return this.http.get<PatientFeedbacks>(this.feedbackUrl)
          .pipe(
            catchError(this.handleError)
          );
      }

    handleError(error: any) {

      let errorMessage = '';
    
      if (error.error instanceof ErrorEvent) {
    
        // client-side error
      
        errorMessage = `Error: ${error.error.message} `;
    
      } else {
    
        // server-side error
    
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    
      }
    
      window.alert(errorMessage);
    
      return throwError(errorMessage);
    
    }

    approveFeedback(id: string): Observable<string>{
      console.log(this.feedbackUrl + '/approve/' + id)
      return this.http.put<string>(this.feedbackUrl, { PersonId: id, state: 'approved'})
      .pipe(
        catchError(this.handleError)
      );
    }

    rejectFeedback(id: string): Observable<string>{
      console.log(this.feedbackUrl + '/approve/' + id)
      return this.http.put<string>(this.feedbackUrl, { PersonId: id, state: 'rejected'})
      .pipe(
        catchError(this.handleError)
      );
    }
}