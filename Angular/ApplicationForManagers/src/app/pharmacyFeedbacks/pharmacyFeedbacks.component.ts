import { Component, OnInit } from "@angular/core";
import { FeedbackModel } from "../shared/feedback.model";
import { FeedbackService } from "../shared/feedback.service";
import { FeedbackResponseModel } from "../shared/feedbackResponse.model";

@Component({
    selector: 'pharmacyFeedbacks',
    templateUrl: './pharmacyFeedbacks.component.html',
    styleUrls: ['./pharmacyFeedbacks.component.css']
})

export class PharmacyFeedbacksComponent implements OnInit{
    feedbacks: FeedbackModel[] =[];
    responses: FeedbackResponseModel[] = [];
    responseVisibility: boolean[] = [];
    response: FeedbackResponseModel = new FeedbackResponseModel();
    constructor(public service: FeedbackService) { 
    }

    ngOnInit(): void {
        this.service.getFeedbacks();
        this.feedbacks = this.service.feedbackList;
        this.responseVisibility.length = this.feedbacks.length;
        for(let response of this.responseVisibility){
            response = false;
        }
        this.service.getFeedbackResponses();
        this.responses = this.service.feedbackResponses;
    }

    changeVisibility(feedbackId: number, responseId:number): void {
        this.responseVisibility[feedbackId-1] = !this.responseVisibility[feedbackId-1];
        this.showResponse(responseId);
    }

    showResponse(responseId: number): void {
        this.service.getFeedbackResponse(responseId);
        this.response = this.service.feedbackResponse;
        console.log(this.response);
    }
}