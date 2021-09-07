import Vue from 'vue'
import ElementUI from 'element-ui'
import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.prototype.moment = moment

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

Vue.filter('stringReplace', listString => {
	return listString.replace(/,/g, ', ')
})

Vue.filter('parseHTML', listString => {
	Vue.nextTick(() => {
		const doc = document.getElementById('content')
		doc.innerHTML = listString
	})
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
