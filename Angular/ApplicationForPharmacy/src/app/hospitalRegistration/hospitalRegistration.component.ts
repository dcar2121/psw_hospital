import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HospitalRegistrationService } from "../shared/hospitalRegistration.service";

@Component({
    selector: 'hospitalRegistration',
    templateUrl: './hospitalRegistration.component.html',
    styleUrls: ['./hospitalRegistration.component.css']
})

export class HospitalRegistrationComponent implements OnInit{

    constructor(public service: HospitalRegistrationService) { }


    ngOnInit(): void {
        console.log('hello world');
    }

    onSubmit(form: NgForm){
        this.service.postLogin().subscribe(
          (res) => {
            console.log("Successfuly registered to database");
          }
        )
        }

    title: string = "Hospital Registration";
    cities: any[] = [
        {
            name: "Novi Sad"
        },
        {
            name: "Beograd"
        },
        {
            name: "Niš"
        },
        {
            name: "Subotica"
        }
    ]

}