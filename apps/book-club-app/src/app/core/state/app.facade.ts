import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { selectTheme } from './app.selectors'
import { toggleTheme } from './app.actions'

@Injectable()
export class AppStateFacade {
  public constructor(private store: Store<unknown>) {}

  public theme$ = this.store.select(selectTheme)

  public toggleTheme(): void {
    this.store.dispatch(toggleTheme())
  }
}
