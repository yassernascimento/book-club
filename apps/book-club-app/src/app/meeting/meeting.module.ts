import { MatCardModule } from '@angular/material/card'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { NgModule } from '@angular/core'

import {
  MeetingCardComponent,
  MeetingCommentsComponent,
  MeetingHistoryComponent,
  MeetingSummaryComponent,
  MeetingVotingComponent,
} from './components'
import { MeetingPageComponent } from './containers'
import { SharedModule } from '../shared/shared.module'

const AppModules = [SharedModule]
const MaterialModules = [MatCardModule, MatProgressBarModule]

@NgModule({
  declarations: [
    MeetingCardComponent,
    MeetingCommentsComponent,
    MeetingHistoryComponent,
    MeetingPageComponent,
    MeetingSummaryComponent,
    MeetingVotingComponent,
  ],
  exports: [MeetingPageComponent, MeetingSummaryComponent],
  imports: [AppModules, MaterialModules],
})
export class MeetingModule {}
