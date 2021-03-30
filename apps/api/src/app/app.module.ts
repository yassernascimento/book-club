import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UtilDatabaseModule } from '@book-club/util-database'

import { ClubReader } from './club-reader'
import { Club, ClubService } from './club'
import { Meeting, MeetingService } from './meeting'
import { Reader, ReaderService } from './reader'

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
      database,
      define: { freezeTableName: true, timestamps: false },
      dialect: 'postgres',
      host,
      logging: false,
      models: [Reader, Club, Meeting, ClubReader],
      password,
      port: +port,
      sync: { alter: true },
      username,
    }),
    UtilDatabaseModule, // testing only
  ],
  providers: [ClubService, MeetingService, ReaderService],
})
export class AppModule {}
