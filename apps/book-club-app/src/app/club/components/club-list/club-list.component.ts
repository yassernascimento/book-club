import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

import { IClub } from '@book-club/models'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-club-list',
  styleUrls: ['./club-list.component.scss'],
  templateUrl: './club-list.component.html',
})
export class ClubListComponent {
  @Input() public clubs: IClub[] = []
  @Output() public cardClick = new EventEmitter<void>()
}
