import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { NgModule } from '@angular/core'

import { ChatMessageComponent } from './components'
import { ChatPageComponent } from './containers'
import { SharedModule } from '../../shared'

const AppModules = [SharedModule]
const MaterialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
]

@NgModule({
  declarations: [ChatMessageComponent, ChatPageComponent],
  exports: [ChatPageComponent],
  imports: [AppModules, MaterialModules],
})
export class ChatModule {}
