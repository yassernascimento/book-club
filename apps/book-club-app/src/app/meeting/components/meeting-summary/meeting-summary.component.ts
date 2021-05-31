import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-meeting-summary',
  styleUrls: ['./meeting-summary.component.scss'],
  templateUrl: './meeting-summary.component.html',
})
export class MeetingSummaryComponent {}
