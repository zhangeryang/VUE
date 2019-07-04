<template>
	<div class="box" @mouseover='over' @mouseout='out'>
		<ul>
			<li v-for='(value,index) in allImg' :style='{backgroundImage:"url("+value+")"}' 
				v-show='index==needIndex?true:false' transition='fade'></li>
		</ul>
		<ol class="node" :style='{width:allImg.length*30+"px"}'>
			<li v-for='(value,index) in allImg' :class='needIndex==index?"active":""'></li>
		</ol>
		<div class="mini" :style='{width:allImg.length*83+"px",bottom:bottomN+"px"}'>
			<img :src='value' v-for='(value,index) in allImg' @click='needIndex=index'/>
		</div>
		
	</div>
</template>

<script>
	//输出组件
	export default { 
		props:['tab'],
		data(){  
			return{
				allImg:[],
				needIndex:'',
				bottomN:'',
				interval:''
			}
		},
		//在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。 
		//2.x的写法
		mounted(){ 
			this.allImg = this.tab.imgs; 
			this.needIndex = this.tab.index;
			this.bottomN = this.tab.miniNode;
			this.interval = this.tab.interval;
		},
		methods:{
			over(){
				this.bottomN = 0;
				clearInterval(this.interval);
			},
			out(){
				this.bottomN = -56;
				clearInterval(this.interval);
				this.interval = setInterval(()=>{
					this.needIndex++;
					this.needIndex == this.allImg.length && (this.needIndex = 0)
				},1000)
			}
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		list-style: none;
	}
	
	.box{
		width: 520px;
		height: 280px; 
		position: relative;
		left:500px;
		top:50px;
		overflow: hidden;
	}
	
	.box ul{
		width: 100%;
		height: 100%;
		position: absolute;
	}
	
	.box ul li{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.node{
		height: 20px; 
		position: absolute;
		z-index: 10;
		bottom: 7px;
		left: 50%;
		transform: translateX(-50%);
		transition: 0.8s;
	}
	
	.node li{
		width: 6px;
		height: 6px;
		float: left;
		background-color: white;
		margin: 7px 12px;
		border-radius: 50%;
	}
	
	.node li.active{
		background-color: #ff0002;
	}
	
	.mini{
		height: 56px; 
		position: absolute;
		z-index: 11;
		bottom: 0px;
		background: rgba(255,255,255,0.5);
		left: 50%;
		transform: translateX(-50%);
		transition: 0.7s;
	}
	
	.mini img{
		width: 77px;
		height: 46px;
		margin: 4px 3px 6px; 
	}
	
	.fade-transition{
		opacity: 1;
		transition: 0.7s;
		 
	}
	 
	.fade-leave{
		opacity: 0; 
	}
	
	.fade-enter{
		opacity: 0; 
	}
	 
</style>