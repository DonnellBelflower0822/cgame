import Common from './Common'

export default class Game1 extends Common {
  constructor () {
    super()
    this.index = 1
  }

  enter () {
    const group = new this.$group('game1')
    // 标题
    const title = this.initTitle('111')
    group.append(title)
    return group
  }

  _initGame () {

  }

  // 处理时间
  dealMethod () {

  }

  out () {
  }

  static getInstance () {
    if (!Game1.instance) {
      Game1.instance = new Game1()
    }
    return Game1.instance
  }
}
