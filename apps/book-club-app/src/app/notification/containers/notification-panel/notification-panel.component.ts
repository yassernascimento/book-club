import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-notification-panel',
  styleUrls: ['./notification-panel.component.scss'],
  templateUrl: './notification-panel.component.html',
})
export class NotificationPanelComponent {
  public NOTIFICATIONS = new Array(5).fill({})
}
