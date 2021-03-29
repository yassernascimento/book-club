import {
  AllowNull,
  Column,
  Default,
  DataType,
  IsIn,
  Model,
  Table,
} from 'sequelize-typescript'
import { IMeeting, MeetingStatus } from '@book-club/models'

const meetingStatusValues = Object.values(MeetingStatus)

@Table
export class Meeting extends Model<Meeting> implements IMeeting {
  @AllowNull(false)
  @Column
  book_id: string

  @IsIn([meetingStatusValues])
  @Default(MeetingStatus.IN_PLANNING)
  @AllowNull(false)
  @Column(DataType.ENUM(...meetingStatusValues))
  status: MeetingStatus
}
