import { Module } from 'magnet-core/module'
import * as sequelizeFixtures from 'sequelize-fixtures'

export default class MagnetSequelizeFixtures extends Module {
  get moduleName () { return 'sequelize_fixtures' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.insert(sequelizeFixtures)
  }
}
