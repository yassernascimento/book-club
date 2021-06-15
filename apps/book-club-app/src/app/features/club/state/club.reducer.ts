import { createReducer, on } from '@ngrx/store'

import { clubsFound, myClubsFound } from './club.actions'
import { ClubState } from './club.types'

const initialState: ClubState = { clubsFound: [], myClubs: [] }

export const clubReducer = createReducer(
  initialState,
  on(clubsFound, (state, { clubs }) => ({ ...state, clubsFound: clubs })),
  on(myClubsFound, (state, { clubs }) => ({ ...state, myClubs: clubs }))
)
