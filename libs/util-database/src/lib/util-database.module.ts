import { Module } from '@nestjs/common'
import { UtilDatabaseService } from './util-database.service'

@Module({
  controllers: [],
  exports: [UtilDatabaseService],
  providers: [UtilDatabaseService],
})
export class UtilDatabaseModule {}
