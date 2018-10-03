<template>
  <div id="app">
  </div>
</template>

<script>
import { Scene } from 'spritejs'
import LoadResource from './assets/scene/LoadResource'
import Background from './assets/scene/Background'
import Game1 from './assets/scene/Game1'

export default {
  name: 'app',
  data () {
    return {
      scene: null,
      game: null,
      background: null,
      clientWidth: 375,
      clientHeight: 667,
      games: {}
    }
  },
  mounted () {
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
    this._initGameStage()
    this._preloadSource()
  },
  methods: {
    // 初始化舞台
    _initGameStage () {
      this.scene = new Scene('#app', {
        viewport: ['auto', 'auto']
      })
      this.background = this.scene.layer('background')
      this.game = this.scene.layer('game')
      // this.game.on('click', this.bindEvent)
    },
    // 加载场景
    async _preloadSource () {
      const group = await LoadResource.getInstance().enter(this.scene, () => {
        this._game1()
      })
      this.game.append(group)
    },
    // 第一题
    _game1 () {
      const bg = Background.getInstance().enter('bg_1')
      this.background.append(bg)
      const game = Game1.getInstance().enter()
      this.game.append(game)
    },
    // 第一题
    _game2 () {
      const bg = Background.getInstance().enter('bg_2')
      this.background.append(bg)
    }
    // 绑定处理事件
    // bindEvent () {
    //   this._game2()
    // }
  }
}
</script>

<style lang="scss">

</style>
