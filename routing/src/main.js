import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './route' //the {} is used here because we import a const defined in routes

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', //default: hash
  scrollBehavior(to, from, savedPosition){
    if (savedPosition){
      return savedPosition;
    }
    if (to.hash){
      return {selector: to.hash};
    }
    return {x: 0, y: 0};
  }
});
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next(); //pass next(false) in order to abort
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
