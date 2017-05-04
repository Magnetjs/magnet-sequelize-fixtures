"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const sequelizeFixtures = require("sequelize-fixtures");
class MagnetSequelizeFixturesStart extends module_1.Module {
    get moduleName() { return 'sequelize_fixtures'; }
    get defaultConfig() { return __dirname; }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const files = this.config.files
                .map((file) => (process.cwd() + file));
            yield sequelizeFixtures.loadFiles(files, this.app.models, this.config);
        });
    }
}
exports.default = MagnetSequelizeFixturesStart;
//# sourceMappingURL=start.js.map