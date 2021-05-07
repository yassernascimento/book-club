import {
  AllowNull,
  Column,
  DataType,
  Default,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'
import { complement, isNil } from 'ramda'
import { IChat } from '@book-club/models'
import { UUIDV4 } from 'sequelize/types'

const isDefined = complement(isNil)

@Table({
  validate: {
    hasOneReference(): void {
      const { club_id, meeting_id } = this
      if (isDefined(club_id) === isDefined(meeting_id)) {
        throw new Error('Chat should belongs to a Club or a Meeting')
      }
    },
  },
})
export class Chat extends Model implements IChat {
  @IsUUID(4)
  @Default(UUIDV4)
  @AllowNull(false)
  @PrimaryKey
  @Column(DataType.UUID)
  public id: string
}
