import Base from '../js/Base'

export default class Common extends Base {
  // 初始化题目
  initTitle (titleText) {
    const label = new this.$label(titleText)
    label.attr({
      anchor: [0.5, 0],
      fillColor: '#fff',
      pos: [this.clientWidth / 2, 100]
    })
    return label
  }
}
