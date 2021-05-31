import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { NgModule } from '@angular/core'

import { MemberCardComponent, MemberListComponent } from './components'
import { SharedModule } from '../shared/shared.module'

const MaterialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
]

@NgModule({
  declarations: [MemberCardComponent, MemberListComponent],
  exports: [MemberListComponent],
  imports: [FlexLayoutModule, MaterialModules, SharedModule],
})
export class MemberModule {}
