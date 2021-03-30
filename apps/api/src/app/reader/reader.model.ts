import { UUIDV4 } from 'sequelize'
import {
  AllowNull,
  Column,
  DataType,
  Default,
  IsEmail,
  IsIn,
  IsUUID,
  Length,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript'
import { Gender, IReader } from '@book-club/models'

const genderValues = Object.values(Gender)

@Table
export class Reader extends Model implements IReader {
  @IsUUID(4)
  @Default(UUIDV4)
  @AllowNull(false)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string

  @Length({ max: undefined, min: 4 })
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
  @Column(DataType.STRING)
  gender: Gender
}
