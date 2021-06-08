import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import {
  clubsFound,
  myClubsFound,
  searchClubs,
  searchMyClubs,
} from './club.actions'
import { selectClubsFound, selectMyClubs } from './club.selectors'
import { ClubSearchPayload } from './club.types'
import { State } from '.'
import { StateService } from '../../utils/state.service'

@Injectable()
export class ClubStateFacade {
  public constructor(
    private store: Store<State>,
    private stateService: StateService
  ) {}

  public clubsFound$ = this.store.select(selectClubsFound)

  public myClubsFound$ = this.store.select(selectMyClubs)

  public clubSearchLoading$ = this.stateService.operationLoading({
    end: clubsFound,
    start: searchClubs,
  })

  public myClubsSearchLoading$ = this.stateService.operationLoading({
    end: myClubsFound,
    start: searchMyClubs,
  })

  public searchClubs(payload: ClubSearchPayload): void {
    this.store.dispatch(searchClubs({ payload }))
  }

  public searchMyClubs(): void {
    this.store.dispatch(searchMyClubs())
  }
}
