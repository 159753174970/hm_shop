import Vue from 'vue'
import App from './App'
import {
	myRequest
} from './uilt/api.js'

import store from "./store"
Vue.prototype.$store = store;

Vue.prototype.$myRequest = myRequest

// 挂在在vue原型对象上

// 全局过滤器
Vue.filter('formatDate', (data) => {
		// console.log(data)
		// 获取时间
		const nDate = new Date(data)
		// 取年  .toString().padStart(2,0)不满足两位数就加0
		const year = nDate.getFullYear()
		// 获取月
		const month = nDate.getMonth().toString().padStart(2, 0)
		// 获取日
		const day = nDate.getMonth().toString().padStart(2, 0)
		return year + '-' + month + '-' + day
})
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
