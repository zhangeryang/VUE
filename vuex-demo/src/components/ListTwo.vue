<template>
	<div class="list-two">
		<h2>list-two</h2>
		<ul>
			<li v-for="product in saleProducts"> 
				<span class="name">{{product.name}}</span>
				<span class="prices">${{product.prices}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{ 
		computed:{
			products(){
				return this.$store.state.products;
			},
			saleProducts(){
				return this.$store.getters.saleProducts;
			}
		}
	}
</script>

<style>
</style>