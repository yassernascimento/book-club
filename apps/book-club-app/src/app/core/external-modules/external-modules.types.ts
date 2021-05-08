import { ModuleWithProviders } from '@angular/core'

type Class = { new (): unknown }

export type ExternalModulesType = {
  imports: ModuleWithProviders<unknown>[]
  exports: Class[]
}
