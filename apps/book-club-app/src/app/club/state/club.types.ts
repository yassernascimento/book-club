import { IClub } from '@book-club/models'
import { stateKey } from '.'

export type ClubState = { clubsFound: IClub[] }
export type State = { [stateKey]: ClubState }
