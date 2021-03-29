import { INestApplication } from '@nestjs/common'

import { getApp } from '../../main'
import { ReaderService } from '.'

let app: INestApplication
let service: ReaderService

beforeAll(async () => {
  app = await getApp()
  service = app.get(ReaderService)
})

afterAll(() => app.close())

describe('create', () => {
  test('should create a club', () => {
    expect(service).toBeDefined()
  })
})
