import { Factory } from 'fishery'

import { IClub, Visibility } from '..'

export const clubMock = Factory.define<IClub>(({ sequence }) => ({
  name: `Club ${sequence}`,
  visibility: Visibility.PRIVATE,
}))
