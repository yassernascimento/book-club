import { INestApplication } from '@nestjs/common'
import { UtilDatabaseService } from '@book-club/util-database'
import { meetingMock } from '@book-club/models'

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
    const meeting = meetingMock.build()
    const meetingCreated = await service.create(meeting)

    expect(meetingCreated).toEqual(
      expect.objectContaining({ id: expect.any(String), ...meeting })
    )
  })
})
