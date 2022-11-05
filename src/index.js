import AppService from './modules/app.service'
import { config } from './modules/config'
import './modules/header.component'
import './css/index.css'
import './less/index.less'

console.log('config key', config.key)
const service = new AppService('export class')
service.log()