import { RouterModule, Routes } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatSelectModule } from '@angular/material/select'
import { MatTabsModule } from '@angular/material/tabs'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import {
  ClubCardComponent,
  ClubFormComponent,
  ClubHeaderComponent,
  ClubListComponent,
  ClubSearchComponent,
} from './components'
import { ClubEffects, clubReducer, stateKey } from './state'
import { ClubPageComponent, ClubSummaryComponent } from './containers'
import { BookModule } from '../book'
import { ChatModule } from '../chat'
import { MeetingModule } from '../meeting'
import { MemberModule } from '../member'
import { SharedModule } from '../../shared'

const routes: Routes = [{ component: ClubPageComponent, path: 'club' }]

const AppModules = [
  BookModule,
  ChatModule,
  MeetingModule,
  MemberModule,
  SharedModule,
]
const MaterialModules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
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
  exports: [
    ClubFormComponent,
    ClubListComponent,
    ClubSearchComponent,
    ClubSummaryComponent,
  ],
  imports: [
    AppModules,
    EffectsModule.forFeature([ClubEffects]),
    MaterialModules,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(stateKey, clubReducer),
  ],
})
export class ClubModule {}
