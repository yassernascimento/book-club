import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  IsIn,
  Model,
  Table,
} from 'sequelize-typescript'
import { ClubRole, IClubReader } from '@book-club/models'

import { Club } from '../club/club.model'
import { Reader } from '../reader'

const clubRoleValues = Object.values(ClubRole)

@Table
export class ClubReader extends Model implements IClubReader {
  @AllowNull(false)
  @ForeignKey(() => Club)
  @Column(DataType.UUID)
  public club_id: string

  @AllowNull(false)
  @ForeignKey(() => Reader)
  @Column(DataType.UUID)
  public reader_id: string

  @IsIn([clubRoleValues])
  @AllowNull(false)
  @Column(DataType.STRING)
  public role: ClubRole
}
