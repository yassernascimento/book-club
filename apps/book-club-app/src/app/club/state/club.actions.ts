import { createAction, props } from '@ngrx/store'

import { IClub } from '@book-club/models'

export const searchClubs = createAction('[Club] Find Clubs')
export const clubsFound = createAction(
  '[Club] Clubs Found',
  props<{ clubs: IClub[] }>()
)
