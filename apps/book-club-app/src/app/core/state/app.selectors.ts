import { createSelector } from '@ngrx/store'

import { AppState, State, Theme } from './app.types'

const getAppState = (state: State): AppState => state.app
const getTheme = (state: AppState): Theme => state.theme

export const selectTheme = createSelector(getAppState, getTheme)
