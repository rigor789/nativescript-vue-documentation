import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import { sync } from 'vuex-router-sync'

import router from './router'
import store from './store'

import App from './components/App'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueScrollTo);

// keeps the router synced with the vuex store
sync(store, router);

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');