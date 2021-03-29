import { INestApplication } from '@nestjs/common'

import { getApp } from '../../main'
import { MeetingService } from '.'

let app: INestApplication
let service: MeetingService

beforeAll(async () => {
  app = await getApp()
  service = app.get(MeetingService)
})

afterAll(() => app.close())

describe('create', () => {
  test('should create a club', () => {
    expect(service).toBeDefined()
  })
})
