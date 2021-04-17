import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UtilDatabaseModule } from '@book-club/util-database'

import { Club, ClubModule } from './club'
import { Meeting, MeetingModule } from './meeting'
import { Reader, ReaderModule } from './reader'
import { BookModule } from './book'
import { ClubReader } from './club-reader'

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
    BookModule,
    ClubModule,
    MeetingModule,
    ReaderModule,
    UtilDatabaseModule, // testing only
  ],
})
export class AppModule {}
