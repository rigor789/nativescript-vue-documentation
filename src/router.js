import Vue from 'vue'
import VueRouter from 'vue-router'

import Page from './components/Page'
import LandingPage from './components/Page'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/*',
    component: Page
  },
  {
    path: '/404',
    component: null
  },
];

export default new VueRouter({
  // mode: 'history',
  routes
});
