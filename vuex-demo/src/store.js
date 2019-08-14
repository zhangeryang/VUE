import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	strict:true, //严格模式
	state:{
		products:[
	       	{name:'马云',prices:'2000'},
	       	{name:'马化腾',prices:'200'},
	       	{name:'马冬梅',prices:'20'},
	       	{name:'马蓉',prices:'2'}
       ]
	},
	getters:{
		saleProducts:(state)=>{
			//拿到数组在map中循环
			var saleProducts = state.products.map(product=>{
				return {
					name:"**"+product.name+"**",
					prices:product.prices/2
				}
			});
			return saleProducts;
		}
	},
	mutations:{
		reducePrice:(state)=>{
			state.products.forEach(
				product=>{
					product.prices -= 2
				}
			)
		}
	},
	actions:{
		reducePrice:(context,payload) =>{
			setTimeout(function(){ 
				context.commit("reducePrice",payload);
			},3000);
		}
	}
})
