<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HospitalRegistrationService } from "../shared/HospitalRegistration.service";

=======
import { Component } from "@angular/core";
>>>>>>> develop

@Component({
    selector: 'hospitalRegistration',
    templateUrl: './hospitalRegistration.component.html',
    styleUrls: ['./hospitalRegistration.component.css']
})

<<<<<<< HEAD
export class HospitalRegistrationComponent implements OnInit{

    constructor(public service: HospitalRegistrationService) { }


    ngOnInit(): void {
        console.log('hello world');
    }

    onSubmit(form: NgForm){
        this.service.postLogin().subscribe(
          (res) => {
            console.log("Successfuly registered hospital to database");
            
          }
        ),
        this.service.registerPharmacy().subscribe(
            (res) => {
                console.log("Successfuly registered pharmacy to database");
            }
        );
    }
=======
export class HospitalRegistrationComponent{
>>>>>>> develop

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