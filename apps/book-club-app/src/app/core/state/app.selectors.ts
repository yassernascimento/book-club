import { createSelector } from '@ngrx/store'

import { AppState, State } from './app.types'

const getAppState = (state: State): AppState => state.app

export const selectTheme = createSelector(getAppState, (state) => state.theme)
