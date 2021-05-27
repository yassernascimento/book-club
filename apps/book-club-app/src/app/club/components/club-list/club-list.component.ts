import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'book-club-club-list',
  styleUrls: ['./club-list.component.scss'],
  templateUrl: './club-list.component.html',
})
export class ClubListComponent {
  @Output() public cardClick = new EventEmitter<void>()

  public get clubs(): unknown[] {
    return [{}, {}, {}, {}, {}, {}, {}]
  }
}
