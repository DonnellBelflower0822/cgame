import Base from '../js/Base'

export default class Common extends Base {
  // 初始化题目
  initTitle (titleText) {
    const label = new this.$label(titleText)
    label.attr({
      anchor: [0.5, 0],
      fillColor: '#f2efa9',
      font: `20px ${this.$ff}`,
      pos: [this.clientWidth / 2, this.clientHeight / 2]
    })
    return label
  }

  // 初始化选项
  initOptions (li) {
  }

  // 初始化题目
  initSubject () {
  }
}
