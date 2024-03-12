<template>
	<view class="main">
		<!--左侧横幅-->
		<view class="leftBanner">
			<view class="title">智周万物</view>
			<view class="text">基于大模型深度学习的一站式数据可视化个人健康智慧管理平台</view>
		</view>
		<!--右侧横幅-->
		<view class="rightBanner">
			<span style="background-image: linear-gradient(#ccf1ff, #9deadc); text-shadow: 0 0 5px #000000; color: #f0f0f0;height: 35px;text-align: center;">注册</span>
			<span>
				<uni-easyinput style="width:100%;size:10px ;text-shadow: 0 0 2px #000000;color: #000000;" suffix-icon="paperplane" @iconClick=""></uni-easyinput>
			</span>
		</view>
		<!-- 首页上方轮播图部分 -->
		<swiper class="swiper" circular="true" autoplay="true" interval="30000">
			<swiper-item class="swiperitem">
				<image class="swiperimage" src="../../images/homepage/轮播图1.jpg"></image>
			</swiper-item>
			<swiper-item class="swiperitem">
				<image class="swiperimage" src="../../images/homepage/轮播图2.png"></image>
			</swiper-item>
			<swiper-item class="swiperitem">
				<image class="swiperimage" src="../../images/homepage/轮播图3.jpg"></image>
			</swiper-item>
			<swiper-item class="swiperitem">
				<image class="swiperimage" src="../../images/homepage/轮播图4.jpg"></image>
			</swiper-item>
			<swiper-item class="swiperitem">
				<image class="swiperimage" src="../../images/homepage/轮播图5.jpg"></image>
			</swiper-item>
		</swiper>
		<!--类星系导航栏部分-->
		<view class="disciption">
			<uni-section title="可添加部分" type="line" style="width: 80vw;background:inherit;" title-color="white">
				后续打算在下面添加其他介绍等部分，上面负责主要功能
			</uni-section>
		</view>
		<!--底部栏位，展示隐私条款及产品详情部分-->
		<view class="bottom">
			这是底部栏
		</view>
	</view>
</template>
 
<script>
	export default {
		data() {
			return { 	
				
			};
		},
		methods:{
			actionsClick(text){
				uni.showToast({
					title:text,
					icon:'none'
				})
			}
		}
	}
</script>

<style>
	.text{
		overflow-wrap: break-word;
		font-size: 2rem;
	}
	.title{
		height: 5rem;
		font-size: 6rem;
		line-height: 5rem;
		margin-bottom: 2rem;
	}
	.rightBanner{
		text-shadow: 0 0 20px #000000;
		color: #f0f0f0;
		background: none;
		text-align: center;
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		position: absolute;
		width: 10vw;
		z-index: 1;
		right:10vh;
		bottom: 5vh;
	}
	.leftBanner{
		text-shadow: 0 0 20px #000000;
		color: #f0f0f0;
		background: none;
		text-align: center;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		position: absolute;
		width: 45vw;
		height: 60vh;
		z-index: 1;
		left: 15vh;
	}
	.swiperimage{
		width: 100%;
		height: 100%;
	}
	.bottom{
		text-align: center;
		bottom: 0;
		padding-bottom: 0;
	}
	.disciption{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.swiperitem{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.swiper{
		text-align: center;
		height: 95vh;
		min-width: 90vh;
	}
	.pic{
		width: 100vh;
		height: 90vh;
	}
	.main{
		background-image: linear-gradient(white,whitesmoke);
		display: flex;
		flex-direction: column;
		justify-content: center;
        min-height: 90vh;
		margin-bottom: 0;
	}
	.body{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		padding: 10vh;
	}
</style>