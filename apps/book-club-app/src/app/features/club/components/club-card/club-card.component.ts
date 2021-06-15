import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { IClub } from '@book-club/models'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-club-card',
  styleUrls: ['./club-card.component.scss'],
  templateUrl: './club-card.component.html',
})
export class ClubCardComponent {
  @Input() public club!: IClub
}
