import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-meeting-comments',
  styleUrls: ['./meeting-comments.component.scss'],
  templateUrl: './meeting-comments.component.html',
})
export class MeetingCommentsComponent {}
