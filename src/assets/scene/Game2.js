import Common from './Common'

export default class Game1 extends Common {
  constructor () {
    super()
    // 当前场景号
    this.index = 0
    // 题目的位置
    this.optionPos = 1
  }

  // 进场
  enter (subject, that) {
    // 关键
    this.that = that
    const group = new this.$group('game1')
    // 月亮
    const yue = Yue.getInstance().enter()
    group.append(yue)
    // 题目
    const subjectGroup = this.initSubject(subject[ this.index ])
    group.append(subjectGroup)
    this.group = group
    this._initGroupAnimte()
    this.that.game.append(group)
  }

  // 处理事件
  dealEvent (index, type) {
    if (type === 'direction') {
      this._out()
      this.that.goto(index)
      return
    }
    if (type === 'option') {
      switch (index) {
        case 0:
          const bear = Bear.getInstance().healthSleepEnter()
          this.bear = bear
          this.that.game.append(bear)
          break
      }
    }
  }

  // 退场动画
  _out () {
    if (this.bear) {
      Bear.getInstance().healthSleepOut()
    }
    this._initGroupAnimte('out')
  }

  // 统一销毁元素
  _destorySprite () {

  }

  static getInstance () {
    if (!Game1.instance) {
      Game1.instance = new Game1()
    }
    return Game1.instance
  }
}
