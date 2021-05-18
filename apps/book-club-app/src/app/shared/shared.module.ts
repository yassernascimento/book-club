import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SpacerComponent } from './components'

@NgModule({
  declarations: [SpacerComponent],
  exports: [CommonModule, SpacerComponent],
  imports: [CommonModule],
})
export class SharedModule {}
