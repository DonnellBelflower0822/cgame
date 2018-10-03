import 'babel-polyfill'
import Vue from 'vue'
import '../scss/common.scss'
import {
  Sprite,
  Label,
  Group
} from 'spritejs'

Vue.prototype.$sprite = Sprite
Vue.prototype.$label = Label
Vue.prototype.$group = Group
export default Vue
