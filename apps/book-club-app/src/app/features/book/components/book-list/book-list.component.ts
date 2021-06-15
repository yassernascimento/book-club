import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  @Output() public cardClick = new EventEmitter<void>()

  public BOOKS = new Array(4).fill({})
}
