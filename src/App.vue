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
import Arrow from './assets/acotr/Arrow'

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
        viewport: ['auto', 'auto']
      })
      this.background = this.scene.layer('background')
      this.game = this.scene.layer('game')
      this.game.on('click', this.bindEvent)
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
      const game = Game1.getInstance().enter(this.get_subject)
      this.game.append(game)
    },
    // 第一题
    _game2 () {
      Game1.getInstance().out()
      this.stage = 'game2'
      const bg = Background.getInstance().enter('bg_2')
      this.background.append(bg)
    },
    // 绑定处理事件
    bindEvent (element) {
      element = element.target
      if (!element || !element.id) {
        return
      }
      // 处理左右按钮
      let id = element.id
      if (id === 'arrowLeft') {
        this._game2()
        return
      }
      switch (this.stage) {
        case 'game1':
          Game1.getInstance().dealEvent(element.id)
          break
        case 'game2':
          break
      }
      this.showArrow()
    },
    // 显示按钮
    showArrow (index) {
      const arrow = Arrow.getInstance().enter(index)
      this.game.append(arrow)
    }
  },
  computed: {
    ...mapGetters([
      'get_subject'
    ])
  }
}
</script>
