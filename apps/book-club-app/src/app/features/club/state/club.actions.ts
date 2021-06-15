import { createAction, props } from '@ngrx/store'

import { ClubSearchPayload } from './club.types'
import { IClub } from '@book-club/models'

export const searchClubs = createAction(
  '[Club] Find Clubs',
  props<{ payload: ClubSearchPayload }>()
)

export const clubsFound = createAction(
  '[Club] Clubs Found',
  props<{ clubs: IClub[] }>()
)

export const searchMyClubs = createAction('[Club] Find My Clubs')

export const myClubsFound = createAction(
  '[Club] My Clubs Found',
  props<{ clubs: IClub[] }>()
)
