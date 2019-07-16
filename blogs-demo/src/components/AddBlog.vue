<template>
	<div class="add-blog">
		<h2>添加博客</h2>
		<form v-show="!submmited">
			<label>标题:</label>
			<input type="text" v-model="blog.title"/>
			<label>内容</label>
			<textarea v-model="blog.content"></textarea>
			<div class="checkbox">
				<label>Vue.js</label>
				<input type="checkbox" value="Vue.js" v-model="blog.objectArr"/>
				<label>React.js</label>
				<input type="checkbox" value="React.js" v-model="blog.objectArr"/>
				<label>Java</label>
				<input type="checkbox" value="Java" v-model="blog.objectArr"/>
				<label>PHP</label>
				<input type="checkbox" value="PHP" v-model="blog.objectArr"/>
			</div>
			<label>作者:</label>
			<select v-model="blog.author">
				<option v-for="author in authors" >{{author}}</option>
			</select>
			<button @click.prevent="post">添加博客</button>
		</form>
		
		<div class="info" v-show="submmited">
			<h3>您的博客已经添加成功！</h3>
		</div>
		
		<div class="preview">
			<p class="bt">标题</p>
			<p>{{blog.title}}</p>
			<p class="bt">内容</p>
			<p>{{blog.content}}</p>
			<p class="bt">科目</p>
			<ul>
				<li v-for="object in blog.objectArr">{{object}}</li>
			</ul>
			<p class="bt">作者</p>
			<p>{{blog.author}}</p>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'add-blog',
		data() {
			return {
				blog:{
					title:"",
					content:"",
					objectArr:[],
					author:""
				},
				authors:['Leo','Jack','Andy'],
				submmited:false
			}
		},
		methods:{
			post(){
				this.$http.post("http://jsonplaceholder.typicode.com/posts",{
					title:this.blog.title,
					body:this.blog.content,
					userId:"001"
				}).then(function(data){
					this.submmited = true;
					console.log(data);
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.add-blog{
		width:500px;
		margin: 40px auto
	}
	
	.add-blog h2{
		text-align: center;
	}
	
	.add-blog label{
		margin:10px 0;
	}
	
	input[type="text"],textarea,select{
		display: block;
		width: 100%;
	}
	
	textarea{
		height: 200px;
	}
	
	.checkbox label{
		 display: inline-block;
	}
	
	.checkbox input{
		margin-left:5px;
	}
	
	button{
		width: 100px;
		padding: 10px;
		margin: 20px 0 0 400px;
		background: #C0C0C0;
		border-radius: 5px;
		
	}
	
	.preview{
		margin-top: 10px;
		padding: 10px;
		width: 100%;
		height: 300px;
		border: 1px dashed #C0C0C0; 
	}
	
	p.bt{
		margin-top: 10px;
		color: #F4A460;
	}
	
	.info{
		color:green
	}
</style>