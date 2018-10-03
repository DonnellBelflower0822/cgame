import Common from './Common'
import Images from '../js/images'

export default class LoadResource extends Common {
  async enter (scene, callback, duration = 200) {
    this.duration = duration
    const group = new this.$group('loaded')
    const label = new this.$label(`加载中... 0 / ${Images.length}`)
    label.attr({
      anchor: [0.5, 0.5],
      font: '20px zk',
      pos: [this.clientWidth / 2, this.clientHeight / 2]
    })
    this.label = label
    group.append(label)
    this.group = group
    this.bindLoaded(scene, callback)
    return group
  }

  async bindLoaded (scene, callback) {
    scene.on('preload', evt => {
      this.label.text = `加载中... ${evt.loaded.length} / ${evt.resources.length}`
    })
    await scene.preload(...Images)
    this.out()
    callback()
  }

  out () {
    let y = this.group.attributes.y
    this.group.animate([
      {
        translate: [-this.clientWidth * 1.3, y]
      }
    ], {
      duration: this.duration,
      fill: 'forwards'
    })
  }

  static getInstance () {
    if (!LoadResource.instance) {
      LoadResource.instance = new LoadResource()
    }
    return LoadResource.instance
  }
}
