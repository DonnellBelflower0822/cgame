<template>
  <div id="app">
  </div>
</template>

<script>
import { Scene } from 'spritejs'
import { mapGetters } from 'vuex'
import LoadResource from './assets/scene/LoadResource'
import Background from './assets/scene/Background'
import Game1 from './assets/scene/Game1'

export default {
  name: 'app',
  data () {
    return {
      scene: null,
      game: null,
      stage: 'preload',
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
        viewport: [ 'auto', 'auto' ]
      })
      this.background = this.scene.layer('background')
      this.game = this.scene.layer('game')
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
      this.stage = 'game1'
      const bg = Background.getInstance().enter('bg_1')
      this.background.append(bg)
      Game1.getInstance().enter(this.get_subject, this)
    },
    // 第一题
    _game2 () {
      this.stage = 'game2'
      const bg = Background.getInstance().enter('bg_2')
      this.background.append(bg)
    },
    // 处理每个scene处理的前一个/后一个场景
    goto (step) {
      switch (this.stage) {
        case 'game1':
          // eslint-disable-next-line
          step === 'left' ? '' : this._game2()
          break
      }
    }
  },
  computed: {
    ...mapGetters([
      'get_subject'
    ])
  }
}
</script>
