import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedbackModel } from './feedback.model';
import { FeedbackResponseModel } from './feedbackResponse.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService{

  formFeedback: FeedbackModel= new FeedbackModel();
  readonly baseUrl = "https://localhost:44317/api/Feedbacks";
  readonly baserUrlResponses = "https://localhost:44317/api/Feedbacks/pharmacy/getFeedbackResponse";
  feedbackList: FeedbackModel[] = [];
  feedbackResponse : FeedbackResponseModel = new FeedbackResponseModel();

  constructor(private http: HttpClient) { }

  postLogin(){
    this.formFeedback.feedbackDate = '03.11.2021.';
    console.log(this.formFeedback);
    return this.http.post(this.baseUrl,this.formFeedback);
  }

  getFeedbacks(){
   this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.feedbackList = res as FeedbackModel[]);
  }

  getFeedbackResponse(){
    this.http.get(this.baserUrlResponses)
     .toPromise()
     .then(res => this.feedbackResponse = res as FeedbackResponseModel);
     console.log(this.feedbackResponse);
   }

}
