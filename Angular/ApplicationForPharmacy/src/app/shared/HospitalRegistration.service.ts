import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HospitalRegistrationModel } from './hospitalRegistration.model';

@Injectable({
    providedIn: 'root'
  })
export class HospitalRegistrationService {

    formHospitalRegistration: HospitalRegistrationModel = new HospitalRegistrationModel();
    readonly baseUrl = "https://localhost:44377/registerHospital";
    readonly baseUrl2 = "https://localhost:44317/api/Feedbacks/registerPharmacy";
    constructor(private http: HttpClient) { }

    postLogin(){
        //this.formHospitalRegistration.hospitalName='PREZIME';
        console.log(this.formHospitalRegistration);
        return this.http.post(this.baseUrl,this.formHospitalRegistration);
    }

    registerPharmacy(){
      return this.http.post(this.baseUrl2, this.formHospitalRegistration.hospitalName);
    }
  }
