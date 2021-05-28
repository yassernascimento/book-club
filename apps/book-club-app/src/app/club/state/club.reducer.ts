import { createReducer, on } from '@ngrx/store'

import { ClubState } from './club.types'
import { clubsFound } from './club.actions'

const initialState: ClubState = { clubsFound: [] }

export const clubReducer = createReducer(
  initialState,
  on(clubsFound, (state, { clubs }) => ({ ...state, clubsFound: clubs }))
)
