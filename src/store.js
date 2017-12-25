import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toc: [],
    flat_toc: [],
    lang: 'en',
    current: {
      matter: {},
      raw_content: '',
      content: ''
    },
    loading: false,
    quickStartModalVisible: false,
  },

  mutations: {
    SET_TOC(state, toc) {
      state.toc = toc;
    },
    SET_FLAT_TOC(state, flat_toc) {
      state.flat_toc = flat_toc;
    },
    SET_CURRENT_RAW_CONTENT(state, raw_content) {
      state.current.raw_content = raw_content;
    },
    SET_CURRENT_CONTENT(state, content) {
      state.current.content = content;
    },
    SET_FRONT_MATTER(state, matter) {
      state.current.matter = matter;
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_QUICK_START_MODAL_VISIBLE(state, quickStartModalVisible) {
      state.quickStartModalVisible = quickStartModalVisible
    }
  }
})