import { RouterModule, Routes } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

import {
  ClubCardComponent,
  ClubFormComponent,
  ClubListComponent,
  ClubSearchComponent,
} from './components'
import { ClubEffects, clubReducer, stateKey } from './state'
import { ClubPageComponent } from './containers'
import { SharedModule } from '../shared/shared.module'

const routes: Routes = [{ component: ClubPageComponent, path: 'club' }]

const MaterialModules = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
]

@NgModule({
  declarations: [
    ClubCardComponent,
    ClubFormComponent,
    ClubListComponent,
    ClubPageComponent,
    ClubSearchComponent,
  ],
  exports: [ClubSearchComponent, ClubListComponent],
  imports: [
    FlexLayoutModule,
    EffectsModule.forFeature([ClubEffects]),
    MaterialModules,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature(stateKey, clubReducer),
  ],
})
export class ClubModule {}
