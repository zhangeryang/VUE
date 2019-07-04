<template>
	<div id="app">
		<Tab :tab='tabNode'></Tab>
		<slideTab :slide='slideNode'></slideTab>
	</div>
</template>

<script>
	//引入组件
	import Tab from './tab.vue'
	
	import slideTab from './slideTab.vue'
	
	export default { 
		data(){
			return{
				tabNode:{
					imgs:['./src/imgs/c1.jpg','./src/imgs/c2.jpg','./src/imgs/c3.jpg','./src/imgs/c4.jpg'],
					index:0,
					miniNode:-56,
					interval:null
				},
				slideNode:{
					imgs:['./src/imgs/c1.jpg','./src/imgs/c2.jpg','./src/imgs/c3.jpg','./src/imgs/c4.jpg','./src/imgs/c5.jpg','./src/imgs/c6.jpg','./src/imgs/c7.jpg'],
				}
			}
		},
		components:{
			Tab,
			slideTab
		}
	}
</script>

<style>
	 
</style>