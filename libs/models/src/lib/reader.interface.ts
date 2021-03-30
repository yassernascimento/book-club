export enum Gender {
  'M' = 'M',
  'F' = 'F',
  'O' = 'O',
}

export interface IReader {
  name: string
  email: string
  gender: Gender
}
