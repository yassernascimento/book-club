import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CoreModule } from './core.module'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [CoreModule],
})
export class AppModule {}
