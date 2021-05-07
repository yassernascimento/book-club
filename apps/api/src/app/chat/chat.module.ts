import { Module } from '@nestjs/common'

import { ChatGateway, ChatService } from '.'

@Module({
  providers: [ChatService, ChatGateway],
})
export class ChatModule {}
