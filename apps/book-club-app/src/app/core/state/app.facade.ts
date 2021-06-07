import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { State } from '.'
import { selectTheme } from './app.selectors'
import { toggleTheme } from './app.actions'

@Injectable()
export class AppStateFacade {
  public constructor(private store: Store<State>) {}

  public theme$ = this.store.select(selectTheme)

  public toggleTheme(): void {
    this.store.dispatch(toggleTheme())
  }
}
