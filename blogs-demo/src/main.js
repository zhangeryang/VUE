// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './router'
//用axios替代vue-resource
//import axios from 'axios' 
//
//axios.default.baseURL='http://localhost:3000'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false

 
//给自定义指令传参--全局的
Vue.directive('action', {
	bind: function(el, binding, vnode) {
		el.style.color = "#f40";
	}
})

//创建路由
const router = new VueRouter({
	routes:routes,
	mode:'history'
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App/>',
	router:router
})