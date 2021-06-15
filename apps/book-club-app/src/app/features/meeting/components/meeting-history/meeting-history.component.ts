import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-meeting-history',
  styleUrls: ['./meeting-history.component.scss'],
  templateUrl: './meeting-history.component.html',
})
export class MeetingHistoryComponent {}
