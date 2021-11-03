import { Component } from "@angular/core";
import { IPharmacy } from "../pharmacy";

@Component({
    selector: 'pharmacyFeedbackForm',
    templateUrl: './pharmacyFeedbackForm.component.html',
    styleUrls: ['./pharmacyFeedbackForm.component.css']
})

export class PharmacyFeedbackFormComponent {
    title: string = "Pharmacy Feedback";
    pharmacies: IPharmacy[] = [
        {
            pharmacyName: "Pharmacy1"
        },
        {
            pharmacyName: "Pharmacy2"
        },
        {
            pharmacyName: "Pharmacy3"
        },
        {
            pharmacyName: "Pharmacy4"
        },
        {
            pharmacyName: "Pharmacy5"
        }
    ];
}