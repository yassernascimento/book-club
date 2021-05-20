import { createReducer, on } from '@ngrx/store'

import { AppState, Theme } from './app.types'
import { toggleTheme } from './app.actions'

const initialState: AppState = { theme: 'light' }

const getOppositeTheme = (theme: Theme): Theme =>
  theme === 'light' ? 'dark' : 'light'

export const appReducer = createReducer(
  initialState,
  on(toggleTheme, (state) => ({
    ...state,
    theme: getOppositeTheme(state.theme),
  }))
)
