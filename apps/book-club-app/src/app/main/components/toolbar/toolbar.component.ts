import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { Theme } from '../../../core/state'
import { UserDetailsComponent } from '../../../user/containers'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-toolbar',
  styleUrls: ['./toolbar.component.scss'],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  @Input() public theme!: Theme
  @Output() public toggleTheme = new EventEmitter<void>()

  public constructor(public dialog: MatDialog) {}

  public getThemeIcon(): string {
    return `${this.theme}_mode`
  }

  public openUserForm(): void {
    this.dialog.open(UserDetailsComponent)
  }
}
