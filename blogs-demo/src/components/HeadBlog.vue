<template> 
	<nav>
		<ul>
			<li><router-link to="/">博客内容</router-link></li>
			<li><router-link to="/add">新增博客</router-link></li>
		</ul> 
	</nav> 
</template>

<script>
	export default{
		name:'head-blog'
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0; 
	}
	
	nav{
		background: #42B983; 
		padding: 30px 0;
		margin: 0
	}
	
	ul{
		list-style: none;
		text-align: center;
		margin: 0; 
	}
	
	ul li{ 
		display: inline-block;
		margin: 0 10px; 
	}
	
	ul li a{ 
		text-decoration:none;
		color: #fff; 
		border-radius: 8px;
		padding: 12px;
	}
	
	.router-link-exact-active{ 
		background: #F4A460
	}
</style>