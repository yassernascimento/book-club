import { Factory } from 'fishery'

import { IMeeting, MeetingStatus } from './meeting.interface'

export const meetingMock = Factory.define<IMeeting>(({ sequence }) => ({
  book_id: String(sequence),
  status: MeetingStatus.IN_PLANNING,
}))
