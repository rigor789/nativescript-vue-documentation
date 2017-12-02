import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toc: []
  },

  mutations: {
    SET_TOC(state, toc) {
      state.toc = toc
    }
  }
})