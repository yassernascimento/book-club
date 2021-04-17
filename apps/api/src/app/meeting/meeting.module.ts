import { Module } from '@nestjs/common'

import { MeetingService } from './meeting.service'

@Module({ providers: [MeetingService] })
export class MeetingModule {}
