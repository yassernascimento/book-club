import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-book-suggestion',
  styleUrls: ['./book-suggestion.component.scss'],
  templateUrl: './book-suggestion.component.html',
})
export class BookSuggestionComponent {}
