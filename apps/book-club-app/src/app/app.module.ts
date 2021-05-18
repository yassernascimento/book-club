import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { MainModule } from './main/main.module'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [CoreModule, MainModule],
})
export class AppModule {}
