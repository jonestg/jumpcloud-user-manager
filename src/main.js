import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { createStore } from './store.js'

Vue.use(Vuex)

const store = createStore()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
