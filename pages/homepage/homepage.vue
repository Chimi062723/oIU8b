<template>
	<view class="main">
		<swiper class="swiper" indicator-dots="true" indicator-active-color="red" circular="true" autoplay="true" interval="30000" indicator-color="blue">
			<swiper-item class="swiperitem">
				<view class="body">
					<uni-section title="功能1" type="line" style="width: 80vw;background:inherit;" title-color="white">
						<uni-card @click="actionsClick('点击了功能1')" >
							<image slot='cover' style="width: 100%" src="../../images/homepage/doc1.jpeg"></image>
							<text class="uni-body">这是功能1</text>
						</uni-card>
					</uni-section>
				</view>
			</swiper-item>
			<swiper-item class="swiperitem">
				<view class="body">
					<uni-section title="功能2" type="line" style="width: 80vw;background:inherit;" title-color="white">
						<uni-card @click="actionsClick('点击了功能2')">
							<image slot='cover' style="width: 100%" src="../../images/homepage/doc2.jpeg"></image>
							<text class="uni-body">这是功能2</text>
						</uni-card>
					</uni-section>
				</view>
			</swiper-item>
			<swiper-item class="swiperitem">
				<view class="body">
					<uni-section title="功能3" type="line" style="width: 80vw;background:inherit;" title-color="white">
						<uni-card @click="actionsClick('点击了功能3')">
							<image slot='cover' style="width: 100%" src="../../images/homepage/doc3.jpeg"></image>
							<text class="uni-body">这是功能3</text>
						</uni-card>
					</uni-section>
				</view>
			</swiper-item>
		</swiper>
		<view class="disciption">
			<uni-section title="可添加部分" type="line" style="width: 80vw;background:inherit;" title-color="white">
				后续打算在下面添加其他介绍等部分，上面负责主要功能
			</uni-section>
		</view>
		<view class="bottom">
			<image src="../../images/homepage/ground.webp" style="width: 100%; height: 40vh; vertical-align: bottom;"> 这是底部栏</image>
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
	}
	.pic{
		width: 100vh;
		height: 90vh;
	}
	.main{
		background-image: linear-gradient(#3269b9,#4682d8);
		display: flex;
		flex-direction: column;
		justify-content: center;
        min-height: 90vh;
		margin-bottom: 0;
	}
	.body{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>