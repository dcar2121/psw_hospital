import { Component, OnInit } from "@angular/core";
import { IPharmacyFeedbackResponse } from "../pharmacyFeedbackResponse";
import { FeedbackModel } from "../shared/feedback.model";
import { FeedbackService } from "../shared/feedback.service";

@Component({
    selector: 'pharmacyFeedbacks',
    templateUrl: './pharmacyFeedbacks.component.html',
    styleUrls: ['./pharmacyFeedbacks.component.css']
})

export class PharmacyFeedbacksComponent implements OnInit{
    feedbacks: FeedbackModel[] =[];
    responses: IPharmacyFeedbackResponse[] = [
        {
            id: 1,
            feedbackId: 1,
            date: "12.11.2021.",
            content: "We will fix it!"
        },
        {
            id: 2,
            feedbackId: 1,
            date: "12.11.2021.",
            content: "Deal!"
        },
        {
            id: 3,
            feedbackId: 1,
            date: "12.11.2021.",
            content: "We will fix it!"
        }
    ];
    responseVisibility: boolean[] = [];
    constructor(public service: FeedbackService) { 
    }

    ngOnInit(): void {
        this.service.getFeedbacks();
        this.feedbacks = this.service.feedbackList;
        console.log(this.feedbacks);
        this.responseVisibility.length = this.responses.length;
        for(let response of this.responseVisibility){
            response = false;
        }
    }

    changeVisibility(responseId: number): void {
        this.responseVisibility[responseId-1] = !this.responseVisibility[responseId-1];
    }
}