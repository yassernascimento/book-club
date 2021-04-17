import { BookService } from './book.service'
import { getApp } from '../../main'

let service: BookService

beforeAll(async () => {
  const app = await getApp()
  service = app.get(BookService)
})

describe('books', () => {
  test('should return books', async () => {
    const title = 'flowers'
    expect(await service.books(title)).toHaveLength(10)
  })
})

describe('byId', () => {
  test('should return a book', async () => {
    const id = 'zyTCAlFPjgYC'
    expect(await service.byId(id)).toBeInstanceOf(Object)
  })
})
