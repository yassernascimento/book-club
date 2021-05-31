import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-meeting-card',
  styleUrls: ['./meeting-card.component.scss'],
  templateUrl: './meeting-card.component.html',
})
export class MeetingCardComponent {}
