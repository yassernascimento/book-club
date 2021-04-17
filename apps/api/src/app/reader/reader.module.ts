import { Module } from '@nestjs/common'

import { ReaderService } from './reader.service'

@Module({ providers: [ReaderService] })
export class ReaderModule {}
