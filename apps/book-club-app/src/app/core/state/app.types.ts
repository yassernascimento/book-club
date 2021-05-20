import { stateKey } from '.'

export type Theme = 'light' | 'dark'
export type AppState = { theme: Theme }
export type State = { [stateKey]: AppState }
