import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { Club } from './club/club.model'
import { Meeting } from './meeting/meeting.model'
import { Reader } from './reader/reader.model'

const {
  DB_USERNAME: username,
  DB_PASSWORD: password,
  DB_DATABASE: database,
  DB_HOST: host,
  DB_PORT: port,
} = process.env

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host,
      port: +port,
      username,
      password,
      database,
      define: { freezeTableName: true, timestamps: false },
      sync: { alter: true },
      models: [Reader, Club, Meeting],
      logging: false,
    }),
  ],
})
export class AppModule {}
