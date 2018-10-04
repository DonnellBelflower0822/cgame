import Base from '../../js/Base'

export default class Yue extends Base {
  enter () {
    const yue = new this.$sprite('yue_1')
    yue.attr({
      size: [545 / 2.4, 570 / 2.4],
      anchor: [0.5, 0],
      pos: [this.clientWidth / 2, 50]
    })
    this.yue = yue
    return yue
  }

  min () {
    this.yue.animate([
      {
        pos: [this.clientWidth / 6, 50 / 2],
        size: [545 / 6, 546 / 6]
      }
    ], {
      duration: 300,
      fill: 'forwards'
    })
  }

  static getInstance () {
    if (!Yue.instance) {
      Yue.instance = new Yue()
    }
    return Yue.instance
  }
}
