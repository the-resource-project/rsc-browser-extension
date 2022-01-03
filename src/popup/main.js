import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmile, faMeh, faFrown, faDizzy, faAngleDown, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import CompaniesReference from '@/mixins/companies-reference'

library.add(faSmile)
library.add(faMeh)
library.add(faFrown)
library.add(faDizzy)
library.add(faAngleDown)
library.add(faQuestion)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.mixin(CompaniesReference)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
