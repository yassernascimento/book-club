import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-club-card',
  styleUrls: ['./club-card.component.scss'],
  templateUrl: './club-card.component.html',
})
export class ClubCardComponent {}
