import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-notification-item',
  styleUrls: ['./notification-item.component.scss'],
  templateUrl: './notification-item.component.html',
})
export class NotificationItemComponent {}
