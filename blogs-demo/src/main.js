// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false

//给自定义指令传参
Vue.directive('action', {
	bind: function(el, binding, vnode) {
		el.style.color = "#f40";
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App/>'
})