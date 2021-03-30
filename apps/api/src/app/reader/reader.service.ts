import { IReader } from '@book-club/models'
import { Injectable } from '@nestjs/common'

import { Reader } from '.'

@Injectable()
export class ReaderService {
  public create(reader: IReader): Promise<Reader> {
    return Reader.create(reader)
  }
}
