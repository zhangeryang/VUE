<template> 
	<div class="outnode">
		<div class="topnode">
			<div v-if='img.length<=4?false:true' class="btn-left" @click='leftCli' 
				@mousedown.prevent > << </div>
			<div v-if='img.length<=4?false:true' class="btn-right" @click='rightCli' 
				@mousedown.prevent  > >> </div>
			<div class="imgdiv">
				<ul :style='{width:img.length*800+"px", left:index*-800+"px"}'>
					<li v-for='i in img'  @mouseover='istrue' @mouseout='isfalse'><img :src="i" :style='{transform:"scale("+transitionlast+")"}'/></li>
				</ul>
			</div>
			<div class="sf">
				<div @click='big' @mousedown.prevent>大</div>
				<div @click='small' @mousedown.prevent>小</div>
			</div> 
			<div class="textdiv" v-show=isshow> 
				<span>{{textstr[index]}}</span> 
			</div>
		</div>
		<div class="bottomnode">
			<div v-if='img.length<=4?false:true' class="btn-left" @click='leftCli' @mousedown.prevent> << </div>
			<div v-if='img.length<=4?false:true' class="btn-right" @click='rightCli' @mousedown.prevent> >> </div>
			<ul :style='{width:img.length*200+"px", left:index>=4?(index-3)*-200+"px":0}'>
				<li v-for='(val,idx) in img' :class="index==idx?'active':''"
					@click="index=idx"><img :src="val"/></li>
			</ul>
		</div>
	</div> 
</template>

<script>
	export default{
		data(){
			return{
				img:['img/c1.jpg','img/c2.jpg','img/c3.jpg','img/c4.jpg','img/c5.jpg','img/c6.jpg'],
				textstr:['图1','图2','图3','图4','图5','图6'],
				index:0,
				transitionlast:1,
				isshow:false
			}
		},
		methods:{
			leftCli(){
				this.index -- ;
				this.index == -1 && (this.index = this.img.length-1);
				this.transitionlast = 1;//缩放不影响旁边的图片
			},
			rightCli(){
				this.index ++;
				this.index == this.img.length  && (this.index = 0);
				this.transitionlast = 1;
			},
			big(){
				this.transitionlast += 0.2;
				console.log(this.transitionlast)
			},
			small(){
				if(this.transitionlast <= 0.4){
					alert("已经缩到最小了！");
					return;
				}
				this.transitionlast -= 0.2;
				console.log(this.transitionlast)
			},
			istrue(){
				this.isshow = true;
			},
			isfalse(){
				this.isshow = false;
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.outnode{
		width: 800px;
		height: 640px;
		border: 1px solid black; 
		margin: 0 auto; 
	}
	
	.topnode{
		width: 100%;
		height: 440px;  
		position: relative;
	}
	
	.btn-left{
		position: absolute; 
		left: 0;	
		top: 40%;
		color: white;
		font-size: 50px;
		z-index: 5;
		opacity: 0.6;
	}
	
	.btn-right{
		position: absolute; 
		right: 0;	
		top: 40%;
		color: white;
		font-size: 50px;
		z-index: 5;
		opacity: 0.6;
	}
	
	.topnode .imgdiv{
		width: 100%;
		height: 100%;  
		position: relative; 
		overflow: hidden;
	}
	
	.topnode .imgdiv ul{
		height: 440px;
		position: absolute; 
	}
	
	.topnode .imgdiv ul li{
		width: 800px;
		height: 100%; 
		float: left;
		transition: 0.9s;
		overflow: hidden;/*为了防止缩放的时候旁边的图片出现*/
	}
	 
	.topnode .imgdiv ul li img{
		width: 800px;
		height: 100%;
	}
	
	.sf{
		display: block;
		position: absolute; 
		right: 0; 
		top: 70%;
		color: black;
		margin-right: 20px; 
	}
	
	.topnode  .textdiv{
		width: 100%;
		height: 40px;  
		background: #eee;
		line-height: 40px; 
		bottom:0;
		position: absolute; 
		opacity: 0.5;
		transition: 0.5s;
	}
	
	.topnode  .textdiv span{
		color: black;
		margin-left: 20px;
		float: left;
	} 
	
	.bottomnode{
		width: 100%;
		height: 200px;  
		background: yellow; 
		overflow: hidden;
		position: relative;
	}
	
	.bottomnode ul{
		height: 200px; 
		position: absolute;
	}
	 
	.bottomnode ul li{
		width: 180px;
		height: 180px;/*每一个li的实际长宽：200*/
		float: left;
		border: 10px solid black;
		transition:  0.4s;
	}
	
	.bottomnode ul li.active{
		border-color: #f40;
	}
	
	.bottomnode ul li img{
		width: 100%;
		height: 100%;
	}
</style>