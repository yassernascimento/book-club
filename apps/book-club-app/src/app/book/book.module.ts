import { FlexLayoutModule } from '@angular/flex-layout'
import { NgModule } from '@angular/core'

import { BookCardComponent, BookListComponent } from './components'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [BookCardComponent, BookListComponent],
  exports: [BookListComponent],
  imports: [FlexLayoutModule, SharedModule],
})
export class BookModule {}
