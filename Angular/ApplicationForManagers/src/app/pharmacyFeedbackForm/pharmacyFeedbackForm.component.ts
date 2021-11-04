import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IPharmacy } from "../pharmacy";
import { FeedbackService } from "../shared/feedback.service";
import { PharmacyService } from "../shared/pharmacy.service";

@Component({
    selector: 'pharmacyFeedbackForm',
    templateUrl: './pharmacyFeedbackForm.component.html',
    styleUrls: ['./pharmacyFeedbackForm.component.css']
})

export class PharmacyFeedbackFormComponent  implements OnInit{
    constructor(public service: FeedbackService ) { }

    title: string = "Pharmacy Feedback";
    pharmacies: string[] = [];

    ngOnInit(): void  {
        this.service.getPharmacyNames();
        this.pharmacies = this.service.pharmacyNames;
    }   

    onSubmit(form: NgForm){
    this.service.postLogin().subscribe(
      (res) => {
        console.log("Successfuly registered to database");
      }
    )
    }

}