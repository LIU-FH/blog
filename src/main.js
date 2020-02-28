import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import './assets/font/iconfont.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import localforage from 'localforage'
import utils from "./utils/index";

import _ from 'lodash'
Vue.prototype._ = _
Vue.prototype.localforage = localforage
Vue.prototype.$utils = utils
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')