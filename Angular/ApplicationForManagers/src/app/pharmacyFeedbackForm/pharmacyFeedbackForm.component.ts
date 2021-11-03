import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IPharmacy } from "../pharmacy";
import { FeedbackService } from "../shared/feedback.service";

@Component({
    selector: 'pharmacyFeedbackForm',
    templateUrl: './pharmacyFeedbackForm.component.html',
    styleUrls: ['./pharmacyFeedbackForm.component.css']
})

export class PharmacyFeedbackFormComponent  implements OnInit{
    constructor(public service: FeedbackService) { }

    title: string = "Pharmacy Feedback";
    pharmacies: IPharmacy[] = [
        {
            pharmacyName: "Pharmacy1",
            pharmacyId: 0
        },
        {
            pharmacyName: "Pharmacy2",
            pharmacyId: 1
        },
        {
            pharmacyName: "Pharmacy3",
            pharmacyId: 3
        },
        {
            pharmacyName: "Pharmacy4",
            pharmacyId: 4
        },
        {
            pharmacyName: "Pharmacy5",
            pharmacyId: 5
        }
    ];

    ngOnInit(): void {}

    onSubmit(form: NgForm){
    this.service.postLogin().subscribe(
      (res) => {
        console.log("Successfuly registered to database");
      }
    )
    }

}