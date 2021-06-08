import { Genres } from '..'

export enum Visibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface IClub {
  id: string
  name: string
  cover: string
  genres: Genres
  description?: string
  visibility: Visibility
}
