import Base from '../js/Base'
import { getAbc } from '../js/tool'

export default class Common extends Base {
  // 初始化题目
  initSubject (subject) {
    let {
      title,
      li
    } = subject
    const group = new this.$group()
    const titleL = this._initTitle(title)
    group.append(titleL)
    const lis = this._initOptions(li)
    group.append(lis)
    return group
  }

  // 高亮选项
  activeOption (index) {
    if (!isNaN(parseInt(index))) {
      index = parseInt(index) - 1
      this.optionsBg[index].textures = 'option_2'
      this.optionsBg.forEach((item, i) => {
        if (i !== index) {
          this.optionsBg[i].textures = 'option_1'
        }
      })
    }
  }

  // 初始化题目
  _initTitle (titleText) {
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
  _initOptions (lis) {
    const options = new this.$group()
    let length = lis.length - 1
    let optionsBg = []
    for (let i = 0; i <= length; i++) {
      let item = lis[i]
      // 背景
      let option = new this.$sprite('option_1')
      option.attr({
        id: i + 1,
        size: [436 / 1.65, 168 / 1.65],
        anchor: [0.5, 0],
        pos: [this.clientWidth / 2, this.clientHeight - 120 - 168 / 1.8 * (length - i)]
      })
      options.append(option)
      optionsBg.push(option)
      // 文案
      let text = new this.$label(`${getAbc(i)}、${item.wrds}`)
      text.attr({
        id: i + 1,
        fillColor: '#fff',
        anchor: [0.5, 0],
        lineHeight: 168 / 1.65,
        pos: [this.clientWidth / 2, this.clientHeight - 120 - 168 / 1.8 * (length - i)]
      })
      options.append(text)
    }
    this.optionsBg = optionsBg
    return options
  }
}
