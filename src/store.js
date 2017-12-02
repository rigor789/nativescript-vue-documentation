import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toc: [],
    lang: 'en',
    current: {
      matter: {},
      content: ''
    }
  },

  mutations: {
    SET_TOC(state, toc) {
      state.toc = toc
    },
    SET_CURRENT_CONTENT(state, content) {
      state.current.content = content;
    },
    SET_FRONT_MATTER(state, matter) {
      state.current.matter = matter
    }
  }
})