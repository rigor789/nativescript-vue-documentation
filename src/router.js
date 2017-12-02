import Vue from 'vue'
import VueRouter from 'vue-router'

import ContentView from './components/content/ContentView'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: ContentView
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});
