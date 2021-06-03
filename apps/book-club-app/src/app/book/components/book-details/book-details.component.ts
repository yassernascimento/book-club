import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-book-details',
  styleUrls: ['./book-details.component.scss'],
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent {
  public constructor(public dialogRef: MatDialogRef<BookDetailsComponent>) {}
}
