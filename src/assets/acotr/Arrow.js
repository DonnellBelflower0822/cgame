import Base from '../js/Base'

export default class Arrow extends Base {
  constructor () {
    super()
    // 图的大小
    this.arrowW = 116
    this.arrowH = 102
    // 图片缩放
    this.base = 2
    // 位置的小调整
    this.offset = 4
    // 动画时长
    this.duration = 300
    // 动画
    this.animate = [
      {
        opacity: 0.2
      },
      {
        opacity: 1
      }
    ]
  }

  enter (index, callback) {
    return this._initArrow(index, callback)
  }

  out () {
    this.group.animate([
      {
        opacity: 1
      },
      {
        opacity: 0
      }
    ], {
      duration: this.duration
    })
  }

  // 初始化箭头
  _initArrow (index, callback) {
    const group = new this.$group()
    if (index !== 0) {
      const arrowLeft = new this.$sprite('arrow_left')
      arrowLeft.attr({
        size: [ this.arrowW / this.base, this.arrowH / this.base ],
        pos: [ this.offset, this.clientHeight - this.arrowH / this.base - this.offset ]
      })
      arrowLeft.animate(this.animate, {
        duration: this.duration
      })
      arrowLeft.on('click', evt => {
        evt.stopDispatch()
        // eslint-disable-next-line
        callback('left')
      })
      group.append(arrowLeft)
    }

    const arrowRight = new this.$sprite('arrow_right')
    arrowRight.attr({
      size: [ this.arrowW / this.base, this.arrowH / this.base ],
      pos: [ this.clientWidth - this.arrowW / this.base - this.offset, this.clientHeight - this.arrowH / this.base - this.offset ]
    })
    arrowRight.animate(this.animate, {
      duration: this.duration
    })
    arrowRight.on('click', evt => {
      evt.stopDispatch()
      // eslint-disable-next-line
      callback('right')
    })
    group.append(arrowRight)
    this.group = group
    return group
  }

  static getInstance () {
    if (!Arrow.instance) {
      Arrow.instance = new Arrow()
    }
    return Arrow.instance
  }
}
