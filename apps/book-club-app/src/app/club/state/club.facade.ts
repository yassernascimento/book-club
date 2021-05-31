import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'

import { clubsFound, searchClubs } from './club.actions'
import { StateService } from '../../utils/state.service'
import { selectClubsFound } from './club.selectors'

@Injectable()
export class ClubStateFacade {
  public constructor(
    private store: Store,
    private stateService: StateService
  ) {}

  public clubsFound$ = this.store.select(selectClubsFound)

  public clubSearchLoading$ = this.stateService.operationLoading({
    end: clubsFound,
    start: searchClubs,
  })

  public searchClubs(): void {
    this.store.dispatch(searchClubs())
  }
}
