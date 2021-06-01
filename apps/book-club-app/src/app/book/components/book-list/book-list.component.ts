import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  public BOOKS = new Array(5).fill({})
}
