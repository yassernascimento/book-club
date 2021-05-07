import { Factory } from 'fishery'

import { IMessage } from '..'

export const messageMock = Factory.define<IMessage>(
  ({ sequence }) => ({} as any)
)
