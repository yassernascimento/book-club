import {
  AllowNull,
  Column,
  DataType,
  IsEmail,
  IsIn,
  Length,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript'
import { Gender, IReader } from '@book-club/models'

const genderValues = Object.values(Gender)

@Table
export class Reader extends Model<Reader> implements IReader {
  @Length({ min: 4, max: undefined })
  @AllowNull(false)
  @Column
  name: string

  @IsEmail
  @Unique
  @AllowNull(false)
  @Column
  email: string

  @IsIn([genderValues])
  @AllowNull(false)
  @Column(DataType.ENUM(...genderValues))
  gender: Gender
}
