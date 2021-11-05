export enum FeedbackState {
    approved,
    rejected,
    pending
}

export class PatientFeedbacks
{
    personId: string;
    text: string;
    state: FeedbackState = FeedbackState.pending;
}