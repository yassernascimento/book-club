import { UUIDV4 } from 'sequelize'
import {
  AllowNull,
  Column,
  DataType,
  Default,
  IsIn,
  IsUUID,
  Length,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'
import { IClub, Visibility } from '@book-club/models'

const visibilityValues = Object.values(Visibility)

@Table
export class Club extends Model implements IClub {
  @IsUUID(4)
  @Default(UUIDV4)
  @AllowNull(false)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string

  @Length({ max: 20, min: 2 })
  @AllowNull(false)
  @Column
  name: string

  @IsIn([visibilityValues])
  @AllowNull(false)
  @Column(DataType.STRING)
  visibility: Visibility
}
