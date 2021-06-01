import { RouterModule, Routes } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatTabsModule } from '@angular/material/tabs'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

import {
  ClubCardComponent,
  ClubFormComponent,
  ClubHeaderComponent,
  ClubListComponent,
  ClubSearchComponent,
  ClubSummaryComponent,
} from './components'
import { ClubEffects, clubReducer, stateKey } from './state'
import { BookModule } from '../book/book.module'
import { ChatModule } from '../chat/chat.module'
import { ClubPageComponent } from './containers'
import { MeetingModule } from '../meeting/meeting.module'
import { MemberModule } from '../member/member.module'
import { SharedModule } from '../shared/shared.module'

const routes: Routes = [{ component: ClubPageComponent, path: 'club' }]

const AppModules = [BookModule, ChatModule, MeetingModule, MemberModule]
const MaterialModules = [
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
]

@NgModule({
  declarations: [
    ClubCardComponent,
    ClubFormComponent,
    ClubHeaderComponent,
    ClubListComponent,
    ClubPageComponent,
    ClubSearchComponent,
    ClubSummaryComponent,
  ],
  exports: [ClubListComponent, ClubSearchComponent, ClubSummaryComponent],
  imports: [
    AppModules,
    EffectsModule.forFeature([ClubEffects]),
    FlexLayoutModule,
    MaterialModules,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature(stateKey, clubReducer),
  ],
})
export class ClubModule {}
