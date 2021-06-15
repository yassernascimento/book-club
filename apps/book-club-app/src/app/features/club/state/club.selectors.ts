import { createSelector } from '@ngrx/store'

import { ClubState, State } from './club.types'

const getClubState = (state: State): ClubState => state.club

export const selectClubsFound = createSelector(
  getClubState,
  (state) => state.clubsFound
)

export const selectMyClubs = createSelector(
  getClubState,
  (state) => state.myClubs
)
