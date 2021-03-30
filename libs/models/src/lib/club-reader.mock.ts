import { Factory } from 'fishery'

import { ClubRole, IClubReader } from '.'

export const clubReaderMock = Factory.define<IClubReader>(({ sequence }) => ({
  club_id: `${sequence}`,
  reader_id: `${sequence}`,
  role: ClubRole.MEMBER,
}))
