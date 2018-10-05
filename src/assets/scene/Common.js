import Base from '../js/Base'
import Arrow from '../acotr/Arrow'
import { getAbc, wait } from '../js/tool'

/***
 * 1. 初始化题目
 * 2. 处理点击选项的事件监听
 * 3. 处理点击选项高亮问题
 */
export default class Common extends Base {
  constructor () {
    super()
    // 按钮是否被渲染
    this._initArrow = false
  }

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
  _activeOption (index) {
    this.optionsBg[ index ].textures = 'option_2'
    this.optionsBg.forEach((item, i) => {
      if (i !== index) {
        this.optionsBg[ i ].textures = 'option_1'
      }
    })
  }

  // 初始化题目
  _initTitle (titleText) {
    const label = new this.$label(titleText)
    label.attr({
      anchor: [ 0.5, 0 ],
      fillColor: '#f2efa9',
      font: `20px ${this.$ff}`,
      pos: [ this.clientWidth / 2, this.clientHeight / 2 ]
    })
    return label
  }

  // 初始化选项
  _initOptions (lis) {
    const options = new this.$group()
    let length = lis.length - 1
    let optionsBg = []
    for (let i = 0; i <= length; i++) {
      let item = lis[ i ]
      // 背景
      let option = new this.$sprite('option_1')
      option.attr({
        size: [ 436 / 1.65, 168 / 1.65 ],
        anchor: [ 0.5, 0 ],
        pos: [ this.clientWidth / 2, this.clientHeight - 120 - 168 / 1.8 * (length - i) ]
      })
      option.on('click', evt => {
        evt.stopDispatch()
        this._handleClick(i, 'option')
      })
      options.append(option)
      optionsBg.push(option)
      // 文案
      let text = new this.$label(`${getAbc(i)}、${item.wrds}`)
      text.attr({
        fillColor: '#fff',
        anchor: [ 0.5, 0 ],
        lineHeight: 168 / 1.65,
        pos: [ this.clientWidth / 2, this.clientHeight - 120 - 168 / 1.8 * (length - i) ]
      })
      text.on('click', evt => {
        evt.stopDispatch()
        this._handleClick(i, 'option')
      })
      options.append(text)
    }
    this.optionsBg = optionsBg
    return options
  }

  // 处理点击事件
  async _handleClick (index, type = 'option') {
    this.dealEvent(index, type)
    if (type === 'option') {
      // 处理选项的高亮问题
      this._activeOption(index)
      if (!this._initArrow) {
        await wait(300)
        this._showArrow()
        this._initArrow = true
      }
    }
  }

  // 显示按钮
  _showArrow () {
    const arrow = Arrow.getInstance().enter(this.index, direction => {
      this._handleClick(direction, 'direction')
    })
    this.group.append(arrow)
  }
}
