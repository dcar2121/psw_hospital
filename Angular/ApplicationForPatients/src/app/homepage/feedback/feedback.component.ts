import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/service/feedback.service';
import { LeaveFeedback } from 'src/app/shared/leaveFeedback';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbDropdownToggle, NgbDropdownMenu,
  NgbDropdown, NgbDropdownItem} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void { }

  public leaveFeedback(): void {
  
    var leaveFeedback = new LeaveFeedback();
    leaveFeedback.personId = "1";
    leaveFeedback.text = "Ljubazno osoblje, sve naj!";
    console.log("sending to server...")

    this.feedbackService.addFeedback(leaveFeedback).subscribe(response => {
      console.log("Submitted to server.")
    });
  } 
  

}
