<template>
	<view class="main" id="fullpage">
		<!--主页面部分-->
		<view class="sectionself">
			<!--左侧横幅-->
			<view class="leftBanner">
				<image src="../../images/homepage/蒙版标题.png" style="width: 100%;height: 100%;"></image>
			</view>
			<!--右侧横幅-->
			<view class="rightBanner">
				<span class="registerButton">注册</span>
			</view>
			<!--右上角宣传标语-->
			<view class="rightup">
				<image src="../../images/homepage/宣传语.png" style="width: 15vw;height: 15vh;"></image>
			</view>
			<!-- 首页上方轮播图部分 -->
			<swiper class="swiper" circular="true" autoplay="true" interval="10000">
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
		</view>
		<!--类星系导航栏部分-->
		<view  class="solar-syst section">
			<view class="sun" id="sun"></view>
			<view class="star1">
				<navigator url="/pages/healthcheck/healthcheck">
					aaa
					<image class="image" src="../../images/homepage/1.png"></image>
				</navigator>
			</view>
			<view class="star2">
				<image class="image" src="../../images/homepage/2.png"></image>
			</view>
			<view class="star3">
				<image class="image" src="../../images/homepage/3.png"></image>
			</view>
			<view class="star4">
				<image class="image" src="../../images/homepage/4.png"></image>
			</view>
			<view class="asteroid-belt"></view>
		</view>
		<view class="disciption">
			<view class="sectionself">
				<uni-section title="可添加部分" type="line" style="width: 80vw;background:inherit;" title-color="white">
					后续打算在下面添加其他介绍等部分，上面负责主要功能
				</uni-section>
			</view>
			<view class="sectionself">
				<uni-section title="可添加部分" type="line" style="width: 80vw;background:inherit;" title-color="white">
					后续打算在下面添加其他介绍等部分，上面负责主要功能
				</uni-section>
			</view>
		</view>
		<!--底部栏位，展示隐私条款及产品详情部分-->
		<view class="bottom">
			这是底部栏
		</view>
	</view>
</template>
 
<script setup>
	import { onMounted } from "vue";
	import { $ } from "../../assets/js/stellar.js";
	onMounted(() => {
		$();
	})
	function hover(id){
		console.log(id);
		if(id == 1){
			uni.navigateTo({
				url:"/pages/healthcheck/healthcheck"
			})
		}
	}
	function actionsClick(text){
		uni.showToast({
			title:text,
			icon:'none'
		});
	}
</script>
<style>
	.sectionself{
		width: 100vw;
		height: 100vh;
	}
	.rightup{
		position: absolute;
		right: 10px;
		top: 10px;
		z-index: 3;
		text-align: center;
		font-family: ;
	}
	*, *::before, *::after {
	  padding: 0;
	  margin: 0;
	}
	.image{
		width: 100px;
		height: 100px;
		top: -50px;
		position: absolute;
		left: 50%;
	}
	.solar-syst {
		background: radial-gradient(ellipse at bottom, #1C2837 0%, #050608 100%);
		background-attachment: fixed;
		margin: 0 auto;
		height: 100vh;
		width: 100vw;
		position: relative;
	}
	.solar-syst::after {
	  content: "";
	  position: absolute;
	  height: 2px;
	  width: 2px;
	  top: -2px;
	  background: white;
	  border-radius: 100px;
	}
	.solar-syst view {
	  top: 50%;
	  left: 50%;
	  position: absolute;
	  z-index: 999;
	  border-radius: 1000px;
	}
	.solar-syst view:not(.sun) {
	  border: 1px solid rgba(102, 166, 229, 0.15);
	}
	.solar-syst view:not(.sun)::before {
	  content: "";
	  position: absolute;
	  left: 50%;
	  border-radius: 1000px;
	}
	.solar-syst div:not(.asteroid-belt)::before{
	  box-shadow: inset 0 6px 0 -2px rgba(0, 0, 0, 0.25);
	}
	.sun {
		border-radius: 0;
		background-image: url(../../images/homepage/sun.png);
		background-size: 100%;
		background-clip: padding-box;
		box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4), 0 0 22px 11px rgba(255, 203, 0, 0.13);
		border: 0;
		height: 500px;
		width: 500px;
		margin-top: -250px;
		margin-left: -250px;
		animation: orbit 60s linear infinite;
	}
	.star1 {
	  height: 700px;
	  width: 700px;
	  margin-top: -350px;
	  margin-left: -350px;
	  animation: orbit 15s linear infinite;
	}
	.star2 {
	  height: 900px;
	  width: 900px;
	  margin-top: -450px;
	  margin-left: -450px;
	  animation: orbit 20s linear infinite;
	}
	.star3 {
	  height: 800px;
	  width: 800px;
	  margin-top: -400px;
	  margin-left: -400px;
	  animation: orbit 8s linear infinite;
	}
	.star4 {
	  height: 500px;
	  width: 500px;
	  margin-top: -250px;
	  margin-left: -250px;
	  animation: orbit 10s linear infinite;
	}
	.asteroid-belt {
	  height: 900px;
	  width: 900px;
	  margin-top: -450px;
	  margin-left: -450px;
	  border-color: transparent !important;
	  overflow: hidden;
	  opacity: 0.7;
	  animation: orbit 180s linear infinite;
	}
	.asteroid-belt::before {
	  top: 50%;
	  height: 210px;
	  width: 210px;
	  margin-left: -105px;
	  margin-top: -105px;
	  background: transparent;
	  border-radius: 140px;
	}
	@keyframes orbit {
	  from {
	    transform: rotate(0deg);
	  }
	  to {
	    transform: rotate(-360deg);
	  }
	}
	.leftnav{
		top: 15vh;
		background-color: transparent;
		box-shadow: 0px 0px 30px 15px inset cadetblue;
		text-shadow: 0 0 20px #000000;
		color: #f0f0f0;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		left: auto;
		margin-left:20px;
		position: fixed;
		z-index: 5;
		height: 70vh;
	}
	.text{
		overflow-wrap: break-word;
		font-size: 2rem;
	}
	.rightBanner{
		text-shadow: 0 0 20px #f0f0f0;
		color: #000000;
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
		width: 33vw;
		height: 60vh;
		top: 20vh;
		z-index: 1;
		left: 15vw;
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
		height: 100vh;
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
	.registerButton{
		background-image: linear-gradient(#ccf1ff, #9deadc);
		text-shadow: 0 0 5px #f0f0f0;
		color: #000000;
		height: 35px;
		text-align: center;
	}
</style>