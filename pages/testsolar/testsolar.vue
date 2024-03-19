<template>
	<view class="solar-syst">
		<view class="sun">
			<navigator url="/pages/healthcheck/healthcheck">
				<image class="sun-image" src="../../images/homepage/sun.png"></image>
			</navigator>
		</view>
		
		<view class="star1">
			<navigator url="/pages/chat/chat">
				<image class="image" src="../../images/homepage/1.png"></image>
			</navigator>
		</view>
		<view class="star1-rail"></view>
		
		<view class="star2">
			<navigator url="/pages/chat/chat">
				<image class="image" src="../../images/homepage/2.png"></image>
			</navigator>
		</view>
		<view class="star2-rail"></view>
		
		<view class="star3">
			<navigator url="/pages/chat/chat">
				<image class="image" src="../../images/homepage/3.png"></image>
			</navigator>
		</view>
		<view class="star3-rail"></view>
		
		<view class="star4">
			<navigator url="/pages/chat/chat">
				<image class="image" src="../../images/homepage/4.png"></image>
			</navigator>
		</view>
		<view class="star4-rail"></view>
	</view>
</template>

<script setup>
	import { onMounted } from "vue";
	import { $ } from "../../assets/js/stellar.js";
	onMounted(() => {
		$();
	})
</script>

<style lang='scss'>
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
		overflow: scroll;
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
	
</style>
