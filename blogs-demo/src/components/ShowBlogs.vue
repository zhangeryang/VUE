<template>
	<div class="show-blogs">
		<h2>博客总览</h2>
		<input type="text"  class="searchBox" v-model="searchVal"/> 
		 
		<div v-for="blog in blogs" class="single-blog">
			<h3 v-action>{{blog.title}}</h3>
			<p>{{blog.body}}</p>
		</div>
	</div>
</template>

<script> 
	
	export default{
		name:"",
		data(){
			return{
				blogs:[]
			}
		},
		//创建完毕，属性已经绑定了
		created(){
			this.$http.get("./../static/post.json").then(function(data){
				//console.log(data);
				this.blogs = data.body.slice(0,10);
			})
		} 
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}

	.show-blogs{
		width: 500px;
		margin: 40px auto;
	}
	
	.single-blog{
		width: 100%; 
		margin: 20px 0;
		padding: 10px 10px;
		background: #eee;
	}
	
	.single-blog h3{
		margin: 10px 0;
	}

</style>