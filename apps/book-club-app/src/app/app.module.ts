import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CoreModule } from './core'
import { MainModule } from './features/main'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [CoreModule, MainModule],
})
export class AppModule {}
