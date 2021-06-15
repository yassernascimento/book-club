import { RouterModule, Routes } from '@angular/router'
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'
import { NgModule } from '@angular/core'

import { HomeFooterComponent, ToolbarComponent } from './components'
import { ClubModule } from '../club'
import { HomePageComponent } from './containers'
import { NotificationModule } from '../notification'
import { SharedModule } from '../../shared'
import { UserModule } from '../user'

const routes: Routes = [{ component: HomePageComponent, path: '' }]

const AppModules = [ClubModule, NotificationModule, SharedModule, UserModule]
const MaterialModules = [
  MatBadgeModule,
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
]

@NgModule({
  declarations: [HomePageComponent, ToolbarComponent, HomeFooterComponent],
  exports: [ToolbarComponent],
  imports: [AppModules, MaterialModules, RouterModule.forChild(routes)],
})
export class MainModule {}
