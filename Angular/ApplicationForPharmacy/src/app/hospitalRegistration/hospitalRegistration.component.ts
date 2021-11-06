import { Component } from "@angular/core";

@Component({
    selector: 'hospitalRegistration',
    templateUrl: './hospitalRegistration.component.html',
    styleUrls: ['./hospitalRegistration.component.css']
})

export class HospitalRegistrationComponent{

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