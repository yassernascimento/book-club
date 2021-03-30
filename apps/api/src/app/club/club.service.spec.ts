import { INestApplication } from '@nestjs/common'
import { UtilDatabaseService } from '@book-club/util-database'
import { clubMock } from '@book-club/models'

import { ClubService } from '.'
import { getApp } from '../../main'

let app: INestApplication
let service: ClubService
let database: UtilDatabaseService

beforeAll(async () => {
  app = await getApp()
  service = app.get(ClubService)
  database = app.get(UtilDatabaseService)
})

beforeEach(() => database.clean())

afterAll(() => app.close())

describe('create', () => {
  test('should create a club', async () => {
    const club = clubMock.build()
    const clubCreated = await service.create(club)

    expect(clubCreated).toEqual(
      expect.objectContaining({ id: expect.any(String), ...club })
    )
  })
})
