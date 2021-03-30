import { Injectable } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'

@Injectable()
export class UtilDatabaseService {
  constructor(private sequelize: Sequelize) {}

  public async clean(): Promise<void> {
    await this.sequelize.sync({ force: true })
  }
}
