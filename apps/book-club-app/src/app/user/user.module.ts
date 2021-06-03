import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { NgModule } from '@angular/core'

import { SharedModule } from '../shared/shared.module'
import { UserDetailsComponent } from './containers'

const AppModules = [SharedModule]
const MaterialModules = [
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
]

@NgModule({
  declarations: [UserDetailsComponent],
  exports: [UserDetailsComponent],
  imports: [AppModules, MaterialModules],
})
export class UserModule {}
