import { Component } from "@angular/core";
import { IPharmacyFeedback } from "../pharmacyFeedback";
import { IPharmacyFeedbackResponse } from "../pharmacyFeedbackResponse";

@Component({
    selector: 'pharmacyFeedbacks',
    templateUrl: './pharmacyFeedbacks.component.html',
    styleUrls: ['./pharmacyFeedbacks.component.css']
})

export class PharmacyFeedbacksComponent {
    feedbacks: IPharmacyFeedback[] = [
        {
            id: 1,
            date: "11.11.2021.",
            hospitalName: "Hospital1",
            content: "The lone lamp post of the one-street town flickered, not quite dead but definitely on its way out. Suitcase by her side, she paid no heed to the light, the street or the town. A car was coming down the street and with her arm outstretched and thumb in the air, she had a plan."
        },
        {
            id: 2,
            date: "12.11.2021.",
            hospitalName: "Hospital2",
            content: "Don't be scared. The things out there that are unknown aren't scary in themselves. They are just unknown at the moment. Take the time to know them before you list them as scary. Then the world will be a much less scary place for you."
        }
    ];
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


    ngOnInit(): void {
        this.responseVisibility.length = this.responses.length;
        for(let response of this.responseVisibility){
            response = false;
        }
    }

    changeVisibility(responseId: number): void {
        this.responseVisibility[responseId-1] = !this.responseVisibility[responseId-1];
    }
}