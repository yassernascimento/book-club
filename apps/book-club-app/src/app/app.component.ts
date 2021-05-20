import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { AppStateFacade, Theme } from '@core/state'

@Component({
  providers: [AppStateFacade],
  selector: 'book-club-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  public theme: Theme
  public subcriptions: Subscription[] = []

  public constructor(public appState: AppStateFacade) {}

  public ngOnInit(): void {
    const themeSubscription = this.appState.theme$.subscribe({
      next: (theme) => (this.theme = theme),
    })

    this.subcriptions.push(themeSubscription)
  }

  public ngOnDestroy(): void {
    this.subcriptions.forEach((s) => s.unsubscribe())
  }
}
