import { MatButtonModule } from '@angular/material/button'
import { NgModule } from '@angular/core'

import { NotificationItemComponent } from './components'
import { NotificationPanelComponent } from './containers'
import { SharedModule } from '../../shared'

const AppModules = [SharedModule]
const MaterialModules = [MatButtonModule]

@NgModule({
  declarations: [NotificationPanelComponent, NotificationItemComponent],
  exports: [NotificationPanelComponent],
  imports: [AppModules, MaterialModules],
})
export class NotificationModule {}
