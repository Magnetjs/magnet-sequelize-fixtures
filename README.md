### Usage

[![Greenkeeper badge](https://badges.greenkeeper.io/Magnetjs/magnet-sequelize-fixtures.svg)](https://greenkeeper.io/)
Basic
```
import { fromNode, fromM, fromLocal } from 'magnet-core'

let app = await magnet([
  fromM('config'),
  fromM('bunyan'),
  fromM('folder-loader'),
  fromM('sequelize-fixtures'),
]);
```
