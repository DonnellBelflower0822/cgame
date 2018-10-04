import Common from './Common'
import Yue from '../acotr/game1/Yue'
import Yun from '../acotr/game1/Yun'
import Bear from '../acotr/game1/Bear'

export default class Game1 extends Common {
  constructor () {
    super()
    this.index = 0
    // 题目的位置
    this.optionPos = 1
  }

  enter (subject) {
    const group = new this.$group('game1')
    // 云
    const yun = Yun.getInstance().enter()
    group.append(yun)
    // 月亮
    const yue = Yue.getInstance().enter()
    group.append(yue)
    // 标题
    // const titleL = this.initTitle(title)
    // group.append(titleL)
    // const options = this.initOptions(li)
    // group.append(options)
    const subjectGroup = this.initSubject(subject[this.index])
    group.append(subjectGroup)
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
  dealEvent (index) {
    index += ''
    this.activeOption(index)
    switch (index) {
      case '1':
        Yue.getInstance().min()
        const bear = Bear.getInstance().healthSleep()
        this.group.append(bear)
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
