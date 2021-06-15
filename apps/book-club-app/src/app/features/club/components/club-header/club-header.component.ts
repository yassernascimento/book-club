import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-club-header',
  styleUrls: ['./club-header.component.scss'],
  templateUrl: './club-header.component.html',
})
export class ClubHeaderComponent {}
