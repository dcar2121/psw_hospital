export enum FeedbackState {
    approved,
    rejected,
    pending
}

export class PatientFeedbacks
{
    id: string;
    personId: string;
    text: string;
    state: FeedbackState = FeedbackState.pending;
}