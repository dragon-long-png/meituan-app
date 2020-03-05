// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import './assets/css/default/css-comment.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */

// router.beforeEach((to, from, next) => {
//   if(to.path != '/index'){
//     var MSearch = document.getElementsByClassName('m-search')[0];
//     MSearch.setAttribute('style', 'padding-bottom: 0px');
//   }
//   next()
// })
Vue.directive('document-click', {
  bind (el, binding, vnode) {
    el.addEventListener('click', binding.value, false)
  },
  inserted () {
  },
  update (el, binding) {
    el.addEventListener('click', binding.value, false)
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
