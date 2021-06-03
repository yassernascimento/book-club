import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { NgModule } from '@angular/core'

import {
  BookCardComponent,
  BookDetailsComponent,
  BookListComponent,
  BookSuggestionComponent,
} from './components'
import { BookPageComponent } from './containers'
import { SharedModule } from '../shared/shared.module'

const AppModules = [SharedModule]
const MaterialModules = [
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
]

@NgModule({
  declarations: [
    BookCardComponent,
    BookDetailsComponent,
    BookListComponent,
    BookPageComponent,
    BookSuggestionComponent,
  ],
  exports: [BookDetailsComponent, BookListComponent, BookPageComponent],
  imports: [AppModules, MaterialModules],
})
export class BookModule {}
