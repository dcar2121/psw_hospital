import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {

  public feedbacks: Feedback[] = [];
  
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.GetFeedbacks();
}

public GetFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe(response => {
    this.feedbacks = response;
  });
}

}
