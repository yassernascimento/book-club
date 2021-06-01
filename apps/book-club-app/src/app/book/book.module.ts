import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material/icon'
import { NgModule } from '@angular/core'

import {
  BookCardComponent,
  BookDetailsComponent,
  BookListComponent,
} from './components'
import { SharedModule } from '../shared/shared.module'

const MaterialModules = [MatIconModule]

@NgModule({
  declarations: [BookCardComponent, BookDetailsComponent, BookListComponent],
  exports: [BookDetailsComponent, BookListComponent],
  imports: [FlexLayoutModule, MaterialModules, SharedModule],
})
export class BookModule {}
