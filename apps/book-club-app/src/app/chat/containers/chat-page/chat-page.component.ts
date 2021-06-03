import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-chat-page',
  styleUrls: ['./chat-page.component.scss'],
  templateUrl: './chat-page.component.html',
})
export class ChatPageComponent {
  public MESSAGES = new Array(7).fill({})
}
