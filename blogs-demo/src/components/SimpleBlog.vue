<template>
	<div class="box">
		<button  class="del" @click.prevent="del">删除</button>
		<router-link :to="'/edit/'+id">
			<button  class="edit">编辑</button>
		</router-link>
		<div class="simple-blog">
			<h2>{{blog.title}}</h2> 
			<article>{{blog.content}}</article> 
			<p>{{blog.author}}</p>
		</div> 
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
			this.$http.get("http://localhost:3000/blogs/"+this.id).then(function(data){
//				console.log(data.body);  
				this.blog = data.body
			})
		},
		methods:{
			del(){
				this.$http.delete("http://localhost:3000/blogs/"+this.id)
				.then(response=>{
					this.$router.push({path:'/'})
				})
			} 
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	
	.box{
		width: 500px;
		margin: 40px auto;
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
	
	button{
		width: 100px;
		padding: 10px;
		margin: 20px 0 0 100px; 
		border-radius: 5px; 
		display: inline-block;
	}
	
	button.del{
		background: #f40;
	}
	
	button.edit{
		background: #42B983;
	}
	
</style>