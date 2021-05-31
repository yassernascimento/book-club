import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-member-card',
  styleUrls: ['./member-card.component.scss'],
  templateUrl: './member-card.component.html',
})
export class MemberCardComponent {}
