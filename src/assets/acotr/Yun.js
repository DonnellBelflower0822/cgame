import Base from '../js/Base'

export default class Yun extends Base {
  static getInstance () {
    if (!Yun.instance) {
      Yun.instance = new Yun()
    }
    return Yun.instance
  }
}
