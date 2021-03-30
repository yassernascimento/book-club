import { INestApplication } from '@nestjs/common'
import { UtilDatabaseService } from '@book-club/util-database'
import { readerMock } from '@book-club/models'

import { ReaderService } from '.'
import { getApp } from '../../main'

let app: INestApplication
let service: ReaderService
let database: UtilDatabaseService

beforeAll(async () => {
  app = await getApp()
  service = app.get(ReaderService)
  database = app.get(UtilDatabaseService)
})

beforeEach(() => database.clean())

afterAll(() => app.close())

describe('create', () => {
  test('should create a reader', async () => {
    const reader = readerMock.build()
    const readerCreated = await service.create(reader)

    expect(readerCreated).toEqual(
      expect.objectContaining({ id: expect.any(String), ...reader })
    )
  })
})
