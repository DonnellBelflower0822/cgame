import Base from '../../js/Base'

export default class Yun extends Base {
  enter () {
    const group = new this.$group()
    const yun1 = new this.$sprite('yun_1')
    yun1.attr({
      scale: 0.5,
      pos: [ this.clientWidth / 2, 100 ]
    })
    yun1.animate([
      {
        x: this.clientWidth / 2 - 10
      }
    ], {
      iterations: Infinity,
      duration: 1500,
      delay: 300,
      endDelay: 1000,
      direction: 'alternate',
      easing: 'ease-in-out'
    })
    group.append(yun1)
    this.group = group
    return group
  }

  static getInstance () {
    if (!Yun.instance) {
      Yun.instance = new Yun()
    }
    return Yun.instance
  }
}
