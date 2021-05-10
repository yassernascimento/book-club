import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { MainModule } from './main/main.module'

const routes: Routes = [
  { loadChildren: (): typeof MainModule => MainModule, path: '' },
]

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes), CoreModule, MainModule],
})
export class AppModule {}
