import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

@NgModule({
  exports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
})
export class CoreModule {}
