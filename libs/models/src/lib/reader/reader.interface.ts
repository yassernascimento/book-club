export enum Gender {
  'M' = 'M',
  'F' = 'F',
  'O' = 'O',
}

export interface IReader {
  id?: string
  name: string
  email: string
  gender: Gender
}
