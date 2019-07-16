<template>
	<div class="simple-blog">
		<h2>{{blog.title}}</h2>
		<article>{{blog.body}}</article>
	</div>
</template>

<script>
	export default{
		name:'simple-blog',
		data(){ 
			return{
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			this.$http.get("http://jsonplaceholder.typicode.com/posts/"+this.id).then(function(data){
				console.log(data.body);  
				this.blog = data.body
			})
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}

	.simple-blog{
		width: 500px;
		margin: 40px auto;
		padding: 30px 20px;
		background: #eee;
	}
	
	h2{
		margin-bottom: 30px;
		color: #ff4400;
	}
</style>