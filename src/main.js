import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import axios from 'axios'
import { sync } from 'vuex-router-sync'

import router from './router'
import store from './store'
import markdown from './markdown'

import App from './components/App'
import NavigationItem from './components/NavigationItem'

Vue.use(VueScrollTo);

Vue.prototype.$http = axios.create();
Vue.prototype.$md = markdown(store);

Vue.component('NavigationItem', NavigationItem);

sync(store, router);

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');