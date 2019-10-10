import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { createStore } from './store.js'
import vuetify from './plugins/vuetify'

Vue.use(Vuex)

const store = createStore()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  store,
}).$mount('#app')
