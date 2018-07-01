// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
/*import '../node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/_bootstrap@3.3.7@bootstrap/dist/js/bootstrap.min.js';*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import md5 from 'js-md5'
import animate from 'animate.css'
import 'vue2-animate/dist/vue2-animate.min.css';
import Axios from 'axios'
import store from './store/store'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(animate)

Vue.prototype.$md5 = md5;
Vue.prototype.$http = Axios;//挂载axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
