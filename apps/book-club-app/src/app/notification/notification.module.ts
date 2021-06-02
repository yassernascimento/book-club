import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'
import { NgModule } from '@angular/core'

import { NotificationItemComponent } from './components'
import { NotificationPanelComponent } from './containers'
import { SharedModule } from '../shared/shared.module'

const MaterialModules = [MatButtonModule]

@NgModule({
  declarations: [NotificationPanelComponent, NotificationItemComponent],
  exports: [NotificationPanelComponent],
  imports: [FlexLayoutModule, MaterialModules, SharedModule],
})
export class NotificationModule {}
