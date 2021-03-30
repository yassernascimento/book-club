import { Factory } from 'fishery'

import { Gender, IReader } from './reader.interface'

export const readerMock = Factory.define<IReader>(({ sequence }) => ({
  name: `Reader ${sequence}`,
  email: `email${sequence}@email.com`,
  gender: Gender.M,
}))
