import 'babel-polyfill'
import Vue from 'vue'
import '../scss/common.scss'
import {
  Sprite,
  Label,
  Group
} from 'spritejs'
import { prototypeConfig } from './const'
import { wait } from './tool'

Object.keys(prototypeConfig).forEach(key => {
  Vue.prototype[ key ] = prototypeConfig[ key ]
})

Vue.prototype.$wait = wait
Vue.prototype.$sprite = Sprite
Vue.prototype.$label = Label
Vue.prototype.$group = Group
export default Vue
