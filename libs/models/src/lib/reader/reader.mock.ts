import { Factory } from 'fishery'

import { Gender, IReader } from '..'

export const readerMock = Factory.define<IReader>(({ sequence }) => ({
  email: `email${sequence}@email.com`,
  gender: Gender.M,
  name: `Reader ${sequence}`,
}))
