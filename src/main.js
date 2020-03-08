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
import VueLazyload from 'vue-lazyload'

Vue.use(VueMaterial)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/img/error.png'),
  loading: require('./assets/img/loading.gif'),
  attempt: 1
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')