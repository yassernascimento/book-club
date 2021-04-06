import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  Default,
  HasMany,
  IsIn,
  IsUUID,
  Length,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'
import { IClub, Visibility } from '@book-club/models'
import { UUIDV4 } from 'sequelize'

import { ClubReader } from '../club-reader'
import { Meeting } from '../meeting'
import { Reader } from '../reader'

const visibilityValues = Object.values(Visibility)

@Table
export class Club extends Model implements IClub {
  @IsUUID(4)
  @Default(UUIDV4)
  @AllowNull(false)
  @PrimaryKey
  @Column(DataType.UUID)
  public id: string

  @Length({ max: 20, min: 2 })
  @AllowNull(false)
  @Column
  public name: string

  @IsIn([visibilityValues])
  @AllowNull(false)
  @Column(DataType.STRING)
  public visibility: Visibility

  @HasMany(() => Meeting)
  public meetings: Meeting[]

  @BelongsToMany(() => Reader, () => ClubReader)
  public readers: Reader[]
}
