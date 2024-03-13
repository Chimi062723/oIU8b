<template>
	<view class="main" id="fullpage">
		<!--左侧导航栏-->
		<view class="leftnav">
			<view>健康展示</view>
			<view>智能问诊</view>
		</view>
		<!--主页面部分-->
		<view class="section">
			<!--左侧横幅-->
			<view class="leftBanner">
				<view class="title">智周万物</view>
				<view class="text">基于大模型深度学习的一站式数据可视化个人健康智慧管理平台</view>
			</view>
			<!--右侧横幅-->
			<view class="rightBanner">
				<span class="registerButton">注册</span>
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
			<view class="sun"></view>
			<view class="star1">
				<image class="image" src="../../images/homepage/1.png"></image>
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
 
<script>
	
	import "@/assets/css/homepage.css";
	import { onMounted } from "vue";
	import {$} from "../../assets/js/main.js"
	export default {
		data() {
			return { 	
				
			};
		},
		mounted() {
			console.log("aaa");
			$();
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
	
</style>