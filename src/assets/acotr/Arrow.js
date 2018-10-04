import Common from '../scene/Common'

export default class Arrow extends Common {
  enter (index) {
    return this._initArrow(index)
  }

  _initArrow (index) {
    const group = new this.$group()
    if (index !== 1) {
      const arrowLeft = new this.$sprite('arrow_left')
      arrowLeft.attr({
        id: 'arrowLeft'
      })
      arrowLeft.animate([
        {
          opacity: 0.2
        },
        {
          opacity: 1
        }
      ], {
        duration: 300
      })
      group.append(arrowLeft)
    }

    return group
  }

  out () {
  }

  static getInstance () {
    if (!Arrow.instance) {
      Arrow.instance = new Arrow()
    }
    return Arrow.instance
  }
}
