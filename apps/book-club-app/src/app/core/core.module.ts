import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field'
import { NgModule, Provider } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

import { appReducer, stateKey } from './state'
import { externalModules } from './external-modules'

const formFieldDefaults: MatFormFieldDefaultOptions = { appearance: 'standard' }
const MaterialThemingDefaults: Provider[] = [
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: formFieldDefaults },
]

@NgModule({
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    StoreModule,
    externalModules.exports,
  ],
  imports: [
    RouterModule.forRoot([]),
    StoreModule.forRoot({ [stateKey]: appReducer }),
    externalModules.imports,
  ],
  providers: [MaterialThemingDefaults],
})
export class CoreModule {}
