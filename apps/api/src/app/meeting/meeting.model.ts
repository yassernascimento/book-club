import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  IsIn,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'
import { IMeeting, MeetingStatus } from '@book-club/models'
import { UUIDV4 } from 'sequelize'

import { Club } from '../club'

const meetingStatusValues = Object.values(MeetingStatus)

@Table
export class Meeting extends Model implements IMeeting {
  @IsUUID(4)
  @Default(UUIDV4)
  @AllowNull(false)
  @PrimaryKey
  @Column(DataType.UUID)
  public id: string

  @AllowNull(false)
  @Column
  public book_id: string

  @IsIn([meetingStatusValues])
  @Default(MeetingStatus.IN_PLANNING)
  @AllowNull(false)
  @Column(DataType.STRING)
  public status: MeetingStatus

  @AllowNull(false)
  @ForeignKey(() => Club)
  @Column(DataType.UUID)
  public club_id: string

  @BelongsTo(() => Club)
  public club: Club
}
