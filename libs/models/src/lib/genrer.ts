export const genres = [
  'Fantasia',
  'Romance',
  'Ficção Científica',
  'Terror',
  'Mistério',
  'Infantil',
  'Auto-ajuda',
  'Política',
  'Religião',
  'Filosofia',
] as const

export type Genres = typeof genres[number][]
