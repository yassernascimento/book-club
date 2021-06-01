import { ChangeDetectionStrategy, Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'

import { BookDetailsComponent } from '../../../book/components'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-club-summary',
  styleUrls: ['./club-summary.component.scss'],
  templateUrl: './club-summary.component.html',
})
export class ClubSummaryComponent {
  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  public openBookDetails(): void {
    this.dialog.open(BookDetailsComponent, { width: '50%' })
  }
}
