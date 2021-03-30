import { INestApplication } from '@nestjs/common'
import { UtilDatabaseService } from '@book-club/util-database'
import { clubMock, meetingMock } from '@book-club/models'

import { MeetingService } from '.'
import { getApp } from '../../main'

let app: INestApplication
let service: MeetingService
let database: UtilDatabaseService

beforeAll(async () => {
  app = await getApp()
  service = app.get(MeetingService)
  database = app.get(UtilDatabaseService)
})

beforeEach(() => database.clean())

afterAll(() => app.close())

describe('create', () => {
  test('should create a meeting', async () => {
    const clubUuid = '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000'
    const clubModel = clubMock.build({ id: clubUuid })
    await database.inject({ Club: [clubModel] })

    const meeting = meetingMock.build({ club_id: clubUuid })
    const meetingCreated = await service.create(meeting)

    expect(meetingCreated).toEqual(
      expect.objectContaining({ id: expect.any(String), ...meeting })
    )
  })
})
