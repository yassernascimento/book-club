import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

import { Theme } from '@core/state/app.types'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-toolbar',
  styleUrls: ['./toolbar.component.scss'],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  @Input() public theme: Theme
  @Output() public toggleTheme = new EventEmitter<void>()

  public getThemeIcon(): string {
    return `${this.theme}_mode`
  }
}
