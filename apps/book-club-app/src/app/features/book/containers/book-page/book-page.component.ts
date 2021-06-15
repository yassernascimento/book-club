import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-book-page',
  styleUrls: ['./book-page.component.scss'],
  templateUrl: './book-page.component.html',
})
export class BookPageComponent {}
