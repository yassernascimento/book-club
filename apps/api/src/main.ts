import { NestFactory } from '@nestjs/core'
import { INestApplication, Logger } from '@nestjs/common'

import { AppModule } from './app/app.module'

const isTestingEnv = process.env.NODE_ENV === 'test'
const disableLogger = { logger: false }
const nestOptions = isTestingEnv ? { ...disableLogger } : {}

export const getApp = (): Promise<INestApplication> =>
  NestFactory.create(AppModule, nestOptions)

async function bootstrap(): Promise<void> {
  const app = await getApp()
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 3333
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix)
  })
}

if (!isTestingEnv) {
  bootstrap()
}
