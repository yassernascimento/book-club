import { HttpModule, Module } from '@nestjs/common'

import { BookService } from './book.service'

@Module({ imports: [HttpModule], providers: [BookService] })
export class BookModule {}
