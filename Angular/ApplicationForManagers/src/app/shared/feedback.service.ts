import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedbackModel } from './feedback.model';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  formFeedback: FeedbackModel= new FeedbackModel();
  readonly baseUrl = 'https://localhost:44317/api/Feedbacks';

  postLogin(){
    this.formFeedback.FeedbackDate = '03.11.2021.';
    console.log(this.formFeedback);
    return this.http.post(this.baseUrl,this.formFeedback);
  }

}
