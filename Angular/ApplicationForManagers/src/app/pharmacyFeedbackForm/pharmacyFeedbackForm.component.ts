import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { FeedbackModel } from "../shared/feedback.model";
=======
import { NgForm } from "@angular/forms";
import { IPharmacy } from "../pharmacy";
>>>>>>> develop
import { FeedbackService } from "../shared/feedback.service";

@Component({
    selector: 'pharmacyFeedbackForm',
    templateUrl: './pharmacyFeedbackForm.component.html',
    styleUrls: ['./pharmacyFeedbackForm.component.css']
})

export class PharmacyFeedbackFormComponent  implements OnInit{
<<<<<<< HEAD
    constructor(public service: FeedbackService, private toastr: ToastrService ) { }

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
          this.resetForm(form);
          this.toastr.success('Your feedback is submitted successfully!', 'Feedback register');
        },
        err => {console.log(err); }
      );
    }

    resetForm(form: NgForm) {
      form.form.reset();
      this.service.formFeedback = new FeedbackModel();
    }

    validate(feedbackValid: FeedbackModel): string{
      if(feedbackValid.content.length === 0) {
       return 'You must fill the content';
      } else if (feedbackValid.pharmacyName.length === 0) {
       return 'You must choose pharmacy!'
      }
      return 'Successfull!'
=======
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
>>>>>>> develop
    }

}