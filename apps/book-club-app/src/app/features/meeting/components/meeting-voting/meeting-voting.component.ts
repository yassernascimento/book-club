import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-meeting-voting',
  styleUrls: ['./meeting-voting.component.scss'],
  templateUrl: './meeting-voting.component.html',
})
export class MeetingVotingComponent {}
