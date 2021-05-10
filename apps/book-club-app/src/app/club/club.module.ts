import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
  ClubCardComponent,
  ClubFormComponent,
  ClubListComponent,
  ClubSearchComponent,
} from './components'

@NgModule({
  declarations: [
    ClubFormComponent,
    ClubListComponent,
    ClubCardComponent,
    ClubSearchComponent,
  ],
  imports: [CommonModule],
})
export class ClubModule {}
