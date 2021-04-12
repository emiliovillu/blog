import production from './production'
import preproduction from './preproduction'

import Config from '.'

export default class ConfigFactory {
  static config = () => {
    const env = process.env.NODE_ENV || 'development'
    const configByEnv = {
      preproduction,
      production
    }
    const config = {
      ...configByEnv[env]
    }
    return new Config({config})
  }
}
