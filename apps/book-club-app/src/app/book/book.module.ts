import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { BookCardComponent, BookListComponent } from './components'

@NgModule({
  declarations: [BookCardComponent, BookListComponent],
  imports: [CommonModule],
})
export class BookModule {}
