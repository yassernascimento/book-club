import {
  AllowNull,
  Column,
  IsIn,
  Length,
  Model,
  Table,
} from 'sequelize-typescript'
import { IClub, Visibility } from '@book-club/models'
import { DataType } from 'sequelize-typescript'

const visibilityValues = Object.values(Visibility)

@Table
export class Club extends Model<Club> implements IClub {
  @Length({ min: 2, max: 20 })
  @AllowNull(false)
  @Column
  name: string

  @IsIn([visibilityValues])
  @AllowNull(false)
  @Column(DataType.ENUM(...visibilityValues))
  visibility: Visibility
}
