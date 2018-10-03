import Common from './Common'

export default class Background extends Common {
  /**
   * 进入场景
   * @param fileName
   * @param duration
   * @param ext
   * @returns {Sprite}
   */
  enter (fileName, duration = 300, ext = 'jpg') {
    const bgs = new this.$sprite(fileName)
    bgs.attr({
      size: [this.clientWidth, this.clientHeight]
    })
    if (!status) {
      bgs.animate([
        {
          opacity: 0.2
        },
        {
          opacity: 1
        }
      ], {
        duration
      })
    }
    if (!this.bgs) {
      this.bgs = []
    }
    this.bgs.push(bgs)
    if (this.bgs.length > 1) {
      setTimeout(() => {
        let bg = this.bgs.shift()
        bg.remove()
      }, duration + 200)
    }
    return bgs
  }

  static getInstance () {
    if (!Background.instance) {
      Background.instance = new Background()
    }
    return Background.instance
  }
}
