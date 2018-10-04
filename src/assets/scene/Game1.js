import Common from './Common'
import Yue from '../acotr/game1/Yue'
import Yun from '../acotr/game1/Yun'

export default class Game1 extends Common {
  constructor () {
    super()
    this.index = 0
  }

  enter (subject) {
    let {
      title,
      li
    } = subject[this.index]
    const group = new this.$group('game1')
    // 云
    const yun = Yun.getInstance().enter()
    group.append(yun)
    // 月亮
    const yue = Yue.getInstance().enter()
    group.append(yue)
    // 标题
    const titleL = this.initTitle(title)
    group.append(titleL)
    // const options = this.initOptions(li)
    // group.append(options)
    this.group = group
    this._initGroupAnimte()
    return group
  }

  _initGroupAnimte (type = 'enter') {
    if (type === 'enter') {
      this.group.attr({
        translate: [this.clientWidth, 0]
      })
      this.group.animate([
        {
          translate: [0, 0]
        }
      ], {
        duration: 300,
        fill: 'forwards'
      })
    } else {
      this.group.animate([
        {
          translate: [-this.clientWidth, 0]
        }
      ], {
        duration: 300,
        fill: 'forwards'
      })
    }
  }

  // 处理事件
  triggerEvent (index) {
    switch (index) {
      case 1:
        Yue.getInstance().min()
        break
    }
  }

  out () {
    this._initGroupAnimte('out')
  }

  static getInstance () {
    if (!Game1.instance) {
      Game1.instance = new Game1()
    }
    return Game1.instance
  }
}
