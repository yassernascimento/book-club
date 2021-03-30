import { Factory } from 'fishery'

import { IClub, Visibility } from './club.interface'

export const clubMock = Factory.define<IClub>(({ sequence }) => ({
  name: `Club ${sequence}`,
  visibility: Visibility.PRIVATE,
}))
