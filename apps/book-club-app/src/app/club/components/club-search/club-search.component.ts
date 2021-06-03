import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-club-search',
  styleUrls: ['./club-search.component.scss'],
  templateUrl: './club-search.component.html',
})
export class ClubSearchComponent {}
