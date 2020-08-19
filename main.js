import Vue from 'vue'
import App from './App'
import store from './store'
import VueExpandFn from './static/js/vueExpandFn.js'
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(VueExpandFn)

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
