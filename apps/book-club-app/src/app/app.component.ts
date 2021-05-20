import { ChangeDetectionStrategy, Component } from '@angular/core'

import { AppStateFacade } from '@core/state'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AppStateFacade],
  selector: 'book-club-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public constructor(public appState: AppStateFacade) {}
}
