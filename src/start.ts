import { Module } from 'magnet-core/module'
import * as sequelizeFixtures from 'sequelize-fixtures'

export default class MagnetSequelizeFixturesStart extends Module {
  get moduleName () { return 'sequelize_fixtures' }
  get defaultConfig () { return __dirname }

  async setup () {
    const files = this.config.files
      .map((file) => (process.cwd() + file))

    await sequelizeFixtures.loadFiles(files, this.app.models, this.config)
  }
}
