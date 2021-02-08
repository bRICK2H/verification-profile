import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faUserShield,
	faTimes,
	faBan,
	faPortrait,
	faMobileAlt
} from '@fortawesome/free-solid-svg-icons'
import {
	faClock,
	faWindowClose,
	faEye
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
	faUserShield,
	faWindowClose,
	faClock,
	faTimes,
	faEye,
	faBan,
	faPortrait,
	faMobileAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
