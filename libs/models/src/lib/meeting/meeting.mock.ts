import { Factory } from 'fishery'

import { IMeeting, MeetingStatus } from '..'

export const meetingMock = Factory.define<IMeeting>(({ sequence }) => ({
  book_id: `${sequence}`,
  club_id: `${sequence}`,
  status: MeetingStatus.IN_PLANNING,
}))
