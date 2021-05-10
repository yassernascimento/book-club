import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { NgModule } from '@angular/core'

import { HomeFooterComponent, HomeToolbarComponent } from './components'
import { HomePageComponent } from './containers'

const routes: Routes = [{ component: HomePageComponent, path: '' }]
const materialModules = [MatButtonModule, MatIconModule, MatToolbarModule]

@NgModule({
  declarations: [HomePageComponent, HomeToolbarComponent, HomeFooterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), materialModules],
})
export class MainModule {}
