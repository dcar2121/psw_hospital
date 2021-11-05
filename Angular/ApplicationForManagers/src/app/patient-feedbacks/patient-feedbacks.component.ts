import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PatientFeedbackService } from '../service/patient-feedbacks.service';
import { PatientFeedbacks, FeedbackState } from '../shared/patient-feedback';



@Component({
  selector: 'app-patient-feedbacks',
  templateUrl: './patient-feedbacks.component.html',
  styleUrls: ['./patient-feedbacks.component.css']
})
export class PatientFeedbacksComponent implements OnInit {
  feedbacks: any = [];
  constructor(private patientFeedbackService: PatientFeedbackService) { }

  ngOnInit(): void {
    this.fetchData()
  }

  public fetchData(): void {
    this.patientFeedbackService.getMethod()
    .subscribe((data: {}) => {
        this.feedbacks = data;
      }
    );
  }

  public GetFeedbackState(feedback: PatientFeedbacks): string {
    switch(feedback.state){
      case 0: {
        return 'approved';
      }
      case 1: {
        return 'rejected';
      }
      default: {
        return 'pending';
      }
    }
  }

  public approveRequest(feedback: PatientFeedbacks): boolean {
    feedback.state = FeedbackState.approved;
    this.patientFeedbackService.approveFeedback(feedback.personId)
    .subscribe(response => {
      console.log("Request approved.")
    });
    return true;
  }

  public rejectRequest(feedback: PatientFeedbacks): boolean {
    feedback.state = FeedbackState.rejected;
    this.patientFeedbackService.rejectFeedback(feedback.personId)
    .subscribe(response => {
      console.log("Request rejected.")
    });
    return true;
  }
}


