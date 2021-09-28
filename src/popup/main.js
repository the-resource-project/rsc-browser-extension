import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
