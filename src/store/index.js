import subject from './tmp'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    subject: JSON.parse(JSON.stringify(subject))
  },
  getters: {
    get_subject: state => state.subject
  }
})
