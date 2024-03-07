<template>
	<view class="main">
		<swiper class="swiper" indicator-dots="true" indicator-active-color="red" circular="true" autoplay="true" interval="3000" indicator-color="blue">
			<swiper-item>
				<view><image src='../../images/homepage/doc1.jpeg' class="pic"></image></view>
			</swiper-item>
			<swiper-item>
				<view><image src='../../images/homepage/doc2.jpeg' class="pic"></image></view>
			</swiper-item>
			<swiper-item>
				<view><image src='../../images/homepage/doc3.jpeg' class="pic"></image></view>
			</swiper-item>
		</swiper>
		<view class="body">
			<uni-section title="功能1" type="line" style="width: 80%; background:inherit;" title-color="white">
				<uni-card @click="actionsClick('点击了功能1')">
					<image slot='cover' style="width: 100%" src="../../images/homepage/doc1.jpeg"></image>
					<text class="uni-body">这是功能1</text>
				</uni-card>
			</uni-section>
		</view>
		<view class="body">
			<uni-section title="功能2" type="line" style="width: 80%; background:inherit;" title-color="white">
				<uni-card @click="actionsClick('点击了功能2')">
					<image slot='cover' style="width: 100%" src="../../images/homepage/doc1.jpeg"></image>
					<text class="uni-body">这是功能2</text>
				</uni-card>
			</uni-section>
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
	.swiper{
		text-align: center;
		max-height: 60%;
		height: 300px;
		width: 100%;
	}
	.pic{
		height: 300px;
		width: 80%;
	}
	.main{
		display: flex;
		flex-direction: column;
	}
	.body{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>