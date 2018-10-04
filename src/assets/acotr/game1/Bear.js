import Common from '../../scene/Common'

export default class Bear extends Common {
  // 早睡早起，睡得香
  healthSleep () {
    const group = new this.$group()
    // 云
    const yun = new this.$sprite('yun_6')
    yun.attr({
      size: [703 / 2, 450 / 2],
      anchor: [0.5, 0],
      pos: [this.clientWidth / 2, 0]
    })
    group.append(yun)
    // 熊
    const bear = new this.$sprite('bear_1')
    bear.attr({
      size: [406 / 2.2, 354 / 2.2],
      anchor: [0.5, 0],
      pos: [this.clientWidth / 2, 0]
    })
    group.append(bear)
    // z
    const z = new this.$sprite('sleep_1')
    // z.attr({})
    group.append(z)
    group.attr({
      pos: [0, 100]
    })
    group.animate([
      {
        translate: [this.clientWidth, 0]
      },
      {
        translate: [0, 0]
      }
    ], {
      duration: 300,
      fill: 'forwards'
    })
    return group
  }

  // 12点就精神
  badSleep () {
  }

  // 熬夜
  staypUp () {

  }

  static getInstance () {
    if (!Bear.instance) {
      Bear.instance = new Bear()
    }
    return Bear.instance
  }
}
