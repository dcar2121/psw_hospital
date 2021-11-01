import { Component } from "@angular/core";
import { IPharmacy } from "../pharmacy";

@Component({
    selector: 'pharmacyFeedback',
    templateUrl: './pharmacyFeedback.component.html',
    styleUrls: ['./pharmacyFeedback.component.css']
})

export class PharmacyFeedbackComponent {
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