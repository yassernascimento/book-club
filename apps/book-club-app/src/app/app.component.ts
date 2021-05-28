import { ChangeDetectionStrategy, Component } from '@angular/core'

import { AppStateFacade } from './core/state'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AppStateFacade],
  selector: 'book-club-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public constructor(public appState: AppStateFacade) {}
}
