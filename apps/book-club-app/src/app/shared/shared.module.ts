import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { NgModule } from '@angular/core'

import { CarouselComponent, CarouselItemDirective } from './components'

const MaterialModules = [MatButtonModule, MatIconModule]

@NgModule({
  declarations: [CarouselComponent, CarouselItemDirective],
  exports: [
    CommonModule,
    FlexLayoutModule,
    CarouselComponent,
    CarouselItemDirective,
  ],
  imports: [FlexLayoutModule, MaterialModules],
})
export class SharedModule {}
