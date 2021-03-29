import { INestApplication } from '@nestjs/common'

import { getApp } from '../../main'
import { ClubService } from '.'

let app: INestApplication
let service: ClubService

beforeAll(async () => {
  app = await getApp()
  service = app.get(ClubService)
})

afterAll(() => app.close())

describe('create', () => {
  test('should create a club', () => {
    expect(service).toBeDefined()
  })
})
