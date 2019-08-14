<template>
	<div class="list-one"> 
		<h2>list-one</h2>
		<ul>
			<li v-for="product in saleProducts"> 
				<span class="name">{{product.name}}</span>
				<span class="prices">${{product.prices}}</span>
			</li>
		</ul>
		<button @click="reducePrice(4)">降价</button>
	</div>
</template>

<script>
	export default{
//		props:['products'],
//		name:'',
//		data(){
//			return{
//				
//			}
//		}
		computed:{
			products(){
				return this.$store.state.products;
			},
//			saleProducts(){
//				return this.$store.state.products.map(
//					product=>{
//						return{
//							name:"**"+product.name+"**",
//							prices:product.prices/2
//						};
//					}
//				);
//				return saleProducts;
//			}
			//上面的可以用vuex的getters方法代替
			saleProducts(){
				return this.$store.getters.saleProducts;
			}
		},
		methods:{
			reducePrice(amount){
//				this.$store.state.products.forEach(
//					product=>{
//						product.prices -= 2;
//					}
//				)
//				this.$store.commit('reducePrice');
				this.$store.dispatch("reducePrice",amount);
			}
		}
	}
</script>

<style>
</style>