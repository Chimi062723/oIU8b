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
				<span class="registerButton" @click="reg">注册</span>
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
		<view class="solar-syst sectionself">
			<view class="sun">
				<navigator url="">
					<image class="sun-image" src="../../images/homepage/sun.png"></image>
				</navigator>
			</view>
			
			<view class="star1">
				<navigator url="/pages/healthcheck/healthcheck">
					<image class="image" src="../../images/homepage/1.png" @mouseover='show1 = true' @mouseleave='show1 = false'></image>
					<label style="color: white;font-size: 25px;">
						个人健康
					</label>
				</navigator>
			</view>
			<view class="star1-rail"></view>
			
			<view class="star2">
				<navigator url="/pages/chat/chat">
					<image class="image" src="../../images/homepage/2.png" @mouseover='show2 = true' @mouseleave='show2 = false'></image>
					<label style="color: white;font-size: 25px;">
						智慧医疗
					</label>
				</navigator>
			</view>
			<view class="star2-rail"></view>
			
			<view class="star3">
				<navigator url="/pages/">
					<image class="image" src="../../images/homepage/3.png" @mouseover='show3 = true' @mouseleave='show3 = false'></image>
					<label style="color: white;font-size: 25px;">
						健康规划
					</label>
				</navigator>
			</view>
			<view class="star3-rail"></view>
			
			<view class="star4">
				<navigator url="/pages/Inquisition/Inquisition_a">
					<image class="image" src="../../images/homepage/4.png" @mouseover='show4 = true' @mouseleave='show4 = false'></image>
					<label style="color: white;font-size: 25px;">
						远程问诊
					</label>
				</navigator>
			</view>
			<view class="star4-rail"></view>
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
	import { onMounted, ref } from "vue";
	import { $ } from "../../assets/js/stellar.js";
	const show1 = ref(false);
	const show2 = ref(false);
	const show3 = ref(false);
	const show4 = ref(false);
	onMounted(() => {
		$();
	})
	function reg(){
		uni.navigateTo({
			url:'/pages/index/logreg'
		})
	}
</script>
<style lang="scss">
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
	}
	
	
	$sun-radius: 500px;
	$star1-radius: 350px;
	$star2-radius: 450px;
	$star3-radius: 550px;
	$star4-radius: 650px;
	$image: 100px;
	
	.sun-image{
		height: $sun-radius;
		width: $sun-radius;
	}
	.solar-syst {
		background: radial-gradient(ellipse at bottom, #1C2837 0%, #050608 100%);
		background-attachment: fixed;
		margin: 0 auto;
		min-height: 100vh;
		width: 100vw;
		overflow: clip;
		position: relative;
	}
	.solar-syst::after {
		z-index: auto;
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
		border-radius: 1000px;
	}
	.sun {
		position: absolute;
		border-radius: 0;
		background-size: 100%;
		background-clip: padding-box;
		border: 0;
		height: $sun-radius;
		width: $sun-radius;
		margin-top: - calc($sun-radius / 2);
		margin-left: - calc($sun-radius / 2);
		z-index: 5;
	}
	
	.star1{
		position: absolute;
		height: $image;
		width: $image;
		margin-top: - calc($image / 2);
		margin-left: - calc($image / 2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		animation: action1 30s linear infinite;
		animation-delay: -10s;
		z-index: 4;
	}
	.star1-rail{
		top: 50%;
		left: 50%;
		position: absolute;
		height: calc($star1-radius * 2);
		width: calc($star1-radius * 2);
		margin-top: - $star1-radius;
		margin-left: - $star1-radius;
		border: 1px solid rgba(102, 166, 229, 0.15);
	}
	@keyframes action1 {
		from {
			transform: rotate(0deg) translate($star1-radius) rotate(0deg);
		}
		to {
		transform: rotate(360deg) translate($star1-radius) rotate(-360deg);
		}
	}
	
	.star2{
		position: absolute;
		height: $image;
		width: $image;
		margin-top: - calc($image / 2);
		margin-left: - calc($image / 2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		animation: action2 40s linear infinite;
		animation-delay: -3s;
		z-index: 3;
	}
	.star2-rail{
		top: 50%;
		left: 50%;
		position: absolute;
		height: calc($star2-radius * 2);
		width: calc($star2-radius * 2);
		margin-top: - $star2-radius;
		margin-left: - $star2-radius;
		border: 1px solid rgba(102, 166, 229, 0.15);
	}
	@keyframes action2 {
		from {
			transform: rotate(0deg) translate($star2-radius) rotate(0deg);
		}
		to {
			transform: rotate(360deg) translate($star2-radius) rotate(-360deg);
		}
	}
	
	.star3{
		position: absolute;
		height: $image;
		width: $image;
		margin-top: - calc($image / 2);
		margin-left: - calc($image / 2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		animation: action3 50s linear infinite;
		animation-delay: -15s;
		z-index: 2;
	}
	.star3-rail{
		top: 50%;
		left: 50%;
		position: absolute;
		height: calc($star3-radius * 2);
		width: calc($star3-radius * 2);
		margin-top: - $star3-radius;
		margin-left: - $star3-radius;
		border: 1px solid rgba(102, 166, 229, 0.15);
	}
	@keyframes action3 {
		from {
			transform: rotate(0deg) translate($star3-radius) rotate(0deg);
		}
		to {
		transform: rotate(360deg) translate($star3-radius) rotate(-360deg);
		}
	}
	
	.star4{
		position: absolute;
		height: $image;
		width: $image;
		margin-top: - calc($image / 2);
		margin-left: - calc($image / 2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		animation: action4 60s linear infinite;
		animation-delay: -5s;
		z-index: 1;
	}
	.star4-rail{
		top: 50%;
		left: 50%;
		position: absolute;
		height: calc($star4-radius * 2);
		width: calc($star4-radius * 2);
		margin-top: - $star4-radius;
		margin-left: - $star4-radius;
		border: 1px solid rgba(102, 166, 229, 0.15);
	}
	@keyframes action4 {
		from {
			transform: rotate(0deg) translate($star4-radius) rotate(0deg);
		}
		to {
			transform: rotate(360deg) translate($star4-radius) rotate(-360deg);
		}
	}
	
	.image{
		width: $image;
		height: $image;
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