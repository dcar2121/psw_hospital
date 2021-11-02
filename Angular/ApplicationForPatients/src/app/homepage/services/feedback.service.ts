import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedbacks: Feedback[] = [];

  constructor() { }

  public getFeedbacks(): Feedback[]{
    let feedback: Feedback = {
      id: 1,
      imePrezime: 'Petar Petrovic',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      dateCreated: new Date()
    }
    let feedback1: Feedback = {
      id: 1,
      imePrezime: 'Marko Markovic',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
      dateCreated: new Date()
    }
    let feedback2: Feedback = {
      id: 1,
      imePrezime: 'Stefan Stefanovic',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      dateCreated: new Date()
    }
    this.feedbacks.push(feedback);
    this.feedbacks.push(feedback1);
    this.feedbacks.push(feedback2);
    return this.feedbacks;
  }
}
