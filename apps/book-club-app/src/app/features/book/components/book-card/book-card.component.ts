import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-book-card',
  styleUrls: ['./book-card.component.scss'],
  templateUrl: './book-card.component.html',
})
export class BookCardComponent {}
