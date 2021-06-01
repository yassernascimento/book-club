import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-book-details',
  styleUrls: ['./book-details.component.scss'],
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent {}
