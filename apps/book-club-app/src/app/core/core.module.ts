import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'

import { externalModules } from './external-modules'

@NgModule({
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    StoreModule,
    ...externalModules.exports,
  ],
  imports: [StoreModule.forRoot({}), ...externalModules.imports],
})
export class CoreModule {}
