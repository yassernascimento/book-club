import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { ExternalModulesType } from './external-modules.types'

export const externalModules: ExternalModulesType = {
  exports: [StoreDevtoolsModule],
  imports: [StoreDevtoolsModule.instrument({ name: 'Book Club Store' })],
}
