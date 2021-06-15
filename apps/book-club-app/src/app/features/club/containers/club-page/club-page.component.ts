import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-club-page',
  styleUrls: ['./club-page.component.scss'],
  templateUrl: './club-page.component.html',
})
export class ClubPageComponent {
  public gap = '30px'
}
