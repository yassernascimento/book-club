import { IClub } from '@book-club/models'
import { stateKey } from '.'

export type ClubSearchPayload = { name: string; genres: string[] }
export type ClubState = { clubsFound: IClub[]; myClubs: IClub[] }
export type State = { [stateKey]: ClubState }
