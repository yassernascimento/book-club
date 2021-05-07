import { Factory } from 'fishery'

import { IChat } from '..'

export const chatMock = Factory.define<IChat>(({ sequence }) => ({}))
