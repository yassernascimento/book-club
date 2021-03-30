export enum Visibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface IClub {
  id?: string
  name: string
  description?: string
  visibility: Visibility
}
