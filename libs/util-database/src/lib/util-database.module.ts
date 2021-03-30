import { Module } from '@nestjs/common'
import { UtilDatabaseService } from './util-database.service'

@Module({
  controllers: [],
  providers: [UtilDatabaseService],
  exports: [UtilDatabaseService],
})
export class UtilDatabaseModule {}
