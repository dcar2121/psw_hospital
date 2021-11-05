import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { HttpClient } from '@angular/common/http';
import { GlobalSettings } from '../../global';
import { Observable } from 'rxjs';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private serverUrl: string = GlobalSettings.baseUrl + "/api/Feedback";
  feedbacks: any[] = [];

  constructor(private httpClient: HttpClient) { }

  public getFeedbacks(): Observable<Feedback[]>{
    return this.httpClient.get<Feedback[]>(this.serverUrl);
  }
}