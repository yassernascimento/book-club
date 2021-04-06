import { HttpService, Injectable } from '@nestjs/common'
import { IBook } from '@book-club/models'
import { stringify } from 'querystring'

@Injectable()
export class BookService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes'

  public constructor(private http: HttpService) {}

  public async books(title: string): Promise<IBook[]> {
    const input = { q: title }
    const url = `${this.apiUrl}?${stringify(input)}`
    const response = await this.http.get(url).toPromise()
    const books = response.data.items
    return books.map(this.format)
  }

  public async byId(id: string): Promise<IBook> {
    const url = `${this.apiUrl}/${id}`
    const response = await this.http.get(url).toPromise()
    const bookFromApi = response.data
    return this.format(bookFromApi)
  }

  private format(bookFromApi): IBook {
    const { volumeInfo, id } = bookFromApi

    return {
      author: (volumeInfo.authors ?? [])[0],
      cover: volumeInfo.imageLinks.thumbnail,
      id,
      pages: volumeInfo.pageCount,
      synopsis: volumeInfo.description,
      title: volumeInfo.title,
    }
  }
}
