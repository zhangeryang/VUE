<template>
	<ul class="slide" @click='change'>
		<li v-for='(value,index) in allImg' 
			:style='{backgroundImage:"url("+value+")"}'
			:class="allClass[index]"></li>
	</ul>
</template>

<script>
	export default{
		props:['slide'],
		data(){
			return{
				allImg:[],
				allClass:[]
			}
		},
		mounted(){
			this.allImg = this.slide.imgs;
			for(var i=0;i<this.allImg.length;i++){
				this.allClass.push('s'+i);
			}
		},
		methods:{
			change(){
				this.allClass.push(this.allClass.shift());
			}
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.slide{
		height: 150px;  
		position: relative; 
		top:200px;
	}
	
	.slide li{
		width: 200px;
		height: 150px;
		float: left;
		position: absolute;
		left: 50%;
		top: 0;
		margin-left: -100px;
		transform: perspective(800px);
	}
	
	//中间图片
	.slide li.s3{  
		z-index: 5;
	}
	.slide li.s2{
		transform: perspective(800px) translate(-200px) rotateY(30deg); 
		z-index: 4;
		opacity: 0.8;
	}
	.slide li.s1{
		transform: perspective(800px) translate(-400px) rotateY(60deg); 
		z-index: 3;
		opacity: 0.4;
	}
	.slide li.s0{
		transform: perspective(800px) translate(-550px) rotateY(90deg); 
		z-index: 2;
		opacity: 0.1;
	}
	.slide li.s4{
		transform: perspective(800px) translate(200px) rotateY(-30deg); 
		z-index: 4;
		opacity: 0.8;
	}
	.slide li.s5{
		transform: perspective(800px) translate(400px) rotateY(-60deg); 
		z-index: 3;
		opacity: 0.4;
	}
	.slide li.s6{
		transform: perspective(800px) translate(550px) rotateY(-90deg); 
		z-index: 2;
		opacity: 0.1;
	}
	 
</style>
