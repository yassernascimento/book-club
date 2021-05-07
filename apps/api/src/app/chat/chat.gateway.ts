import {
  // ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets'
// import { Socket } from 'socket.io'

@WebSocketGateway()
export class ChatGateway {
  @SubscribeMessage('message')
  public handleMessage(
    @MessageBody() data: string
    // @ConnectedSocket() client: Socket
  ): string {
    return data
  }
}
