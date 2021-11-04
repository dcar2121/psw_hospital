import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HospitalRegistrationModel } from './hospitalRegistration.model';

@Injectable({
    providedIn: 'root'
  })
export class HospitalRegistrationService {

    formHospitalRegistration: HospitalRegistrationModel = new HospitalRegistrationModel();
    readonly baseUrl = "https://localhost:44377/registerHospital";

    constructor(private http: HttpClient) { }

    postLogin(){
        //this.formHospitalRegistration.hospitalName='PREZIME';
        console.log(this.formHospitalRegistration);
        return this.http.post(this.baseUrl,this.formHospitalRegistration);
    }

  }
