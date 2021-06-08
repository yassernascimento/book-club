import { Factory } from 'fishery'
import { v4 as uuidv4 } from 'uuid'

import { IClub, Visibility } from '..'

export const clubMock = Factory.define<IClub>(({ sequence }) => ({
  cover:
    'https://i.pinimg.com/474x/26/93/de/2693debd172f28360978dfb28f692d8e.jpg',
  genres: ['Ficção Científica', 'Fantasia'],
  id: uuidv4(),
  name: `Club ${sequence}`,
  visibility: Visibility.PUBLIC,
}))
