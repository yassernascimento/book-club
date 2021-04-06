import { IClub, IClubReader, IMeeting, IReader } from '@book-club/models'
import { Injectable } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'

type InjectPayload = Partial<{
  Club: IClub[]
  ClubReader: IClubReader[]
  Meeting: IMeeting[]
  Reader: IReader[]
}>

@Injectable()
export class UtilDatabaseService {
  public constructor(private sequelize: Sequelize) {}

  public async clean(): Promise<void> {
    await this.sequelize.sync({ force: true })
  }

  public async inject(payload: InjectPayload): Promise<void> {
    for (const [table, rows] of Object.entries(payload)) {
      await this.sequelize.models[table].bulkCreate(rows, {
        individualHooks: true,
        validate: true,
      })
    }
  }
}
