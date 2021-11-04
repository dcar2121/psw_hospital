import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/service/feedback.service';
import { LeaveFeedback } from 'src/app/shared/leaveFeedback';
import { StarRatingComponent } from 'ng-starrating';

import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbDropdownToggle, NgbDropdownMenu,
  NgbDropdown, NgbDropdownItem} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  leaveFeedback: LeaveFeedback;
  readonly: any;
  checkedcolor: any;
  uncheckedcolor: any;
  value: number;
  size: any;
  totalstars: number;

  constructor(private feedbackService: FeedbackService) { }
  
  ngOnInit(): void {
    this.leaveFeedback = new LeaveFeedback();
    this.readonly = false;
    this.checkedcolor = "red";
    this.uncheckedcolor = "black";
    this.value = 1;
    this.size = "50px";
    this.totalstars = 5;

  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  public addNewFeedback(): void {
  
    
   // leaveFeedback.personId = "1";
   // leaveFeedback.text = "Ljubazno osoblje, sve naj!";
    console.log("sending to server...")

    this.feedbackService.addFeedback(this.leaveFeedback).subscribe(response => {
      console.log("Submitted to server.")
    });

    /*
    this.feedbackService.addFeedback(leaveFeedback).subscribe(response => {
      console.log("Submitted to server.")
    });
    */

  } 


}
