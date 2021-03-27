import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const {
  DB_USERNAME: username,
  DB_PASSWORD: password,
  DB_DATABASE: database,
  DB_HOST: host,
  DB_PORT: port,
} = process.env;

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host,
      port: +port,
      username,
      password,
      database,
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
