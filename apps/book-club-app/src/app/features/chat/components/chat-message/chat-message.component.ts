import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-chat-message',
  styleUrls: ['./chat-message.component.scss'],
  templateUrl: './chat-message.component.html',
})
export class ChatMessageComponent {
  public isMine = false
}
