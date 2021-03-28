export enum MeetingStatus {
  IN_PLANNING = 'IN_PLANNING',
  SCHEDULED = 'SCHEDULED',
  CANCELLED = 'CANCELLED',
  FINISHED = 'FINISHED',
}

export interface IMeeting {
  book_id: string
  status: MeetingStatus
}
