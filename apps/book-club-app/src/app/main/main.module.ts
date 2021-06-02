import { RouterModule, Routes } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'
import { NgModule } from '@angular/core'

import { HomeFooterComponent, ToolbarComponent } from './components'
import { ClubModule } from '../club/club.module'
import { HomePageComponent } from './containers'
import { NotificationModule } from '../notification/notification.module'
import { SharedModule } from '../shared/shared.module'

const routes: Routes = [{ component: HomePageComponent, path: '' }]

const AppModules = [ClubModule, NotificationModule, SharedModule]
const MaterialModules = [
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
]

@NgModule({
  declarations: [HomePageComponent, ToolbarComponent, HomeFooterComponent],
  exports: [ToolbarComponent],
  imports: [
    AppModules,
    FlexLayoutModule,
    MaterialModules,
    RouterModule.forChild(routes),
  ],
})
export class MainModule {}
