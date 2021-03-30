import { IMeeting } from '@book-club/models'
import { Injectable } from '@nestjs/common'

import { Meeting } from '.'

@Injectable()
export class MeetingService {
  public create(meeting: IMeeting): Promise<Meeting> {
    return Meeting.create(meeting)
  }
}
