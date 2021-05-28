import { ActionsSubject, Store } from '@ngrx/store'
import { filter, map, startWith } from 'rxjs/operators'
import { Injectable } from '@angular/core'

import { clubsFound, searchClubs } from './club.actions'
import { selectClubsFound } from './club.selectors'

@Injectable()
export class ClubStateFacade {
  public constructor(private store: Store, private actions$: ActionsSubject) {}

  public clubsFound$ = this.store.select(selectClubsFound)

  public clubSearchLoading$ = this.actions$.pipe(
    filter((action) => {
      const startAndEndActions: string[] = [searchClubs.type, clubsFound.type]
      return startAndEndActions.includes(action.type)
    }),
    map((action) => action.type === searchClubs.type),
    startWith(false)
  )

  public searchClubs(): void {
    this.store.dispatch(searchClubs())
  }
}
