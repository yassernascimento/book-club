import {
  AllowNull,
  BelongsToMany,
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
import { UUIDV4 } from 'sequelize'

import { Club } from '../club'
import { ClubReader } from '../club-reader/club-reader.model'

const genderValues = Object.values(Gender)

@Table
export class Reader extends Model implements IReader {
  @IsUUID(4)
  @Default(UUIDV4)
  @AllowNull(false)
  @PrimaryKey
  @Column(DataType.UUID)
  public id: string

  @Length({ max: undefined, min: 4 })
  @AllowNull(false)
  @Column
  public name: string

  @IsEmail
  @Unique
  @AllowNull(false)
  @Column
  public email: string

  @IsIn([genderValues])
  @AllowNull(false)
  @Column(DataType.STRING)
  public gender: Gender

  @BelongsToMany(() => Club, () => ClubReader)
  public clubs: Club[]
}
