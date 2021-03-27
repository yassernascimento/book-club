export enum Visibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface IClub {
  name: string;
  description?: string;
  visibility: Visibility;
}
