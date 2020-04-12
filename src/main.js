import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupBus } from './bus'

Vue.config.productionTip = false

setupBus()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
