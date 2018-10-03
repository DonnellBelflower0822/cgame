import {
  Sprite,
  Label,
  Group
} from 'spritejs'

export default class Base {
  constructor () {
    this.$sprite = Sprite
    this.$label = Label
    this.$group = Group
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
  }
}
