<template>
	<view class="solar-syst">
		<view class="sun"></view>
		<view class="smile">
			<image class="image" src="../../images/homepage/轮播图1.jpg"></image>
		</view>
	</view>
</template>

<script setup>
</script>

<style>
*, *::before, *::after {
  padding: 0;
  margin: 0;
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
  height: 0px;
  width: 0px;
  top: 0px;
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
.solar-syst view:not(.sun)::before {
  content: "";
  position: absolute;
  left: 50%;
  border-radius: 1000px;
  border: 1px solid rgba(102, 166, 229, 0.15);
}
.sun {
	border-radius: 0;
	background-image: url(../../static/logo.png);
	background-size: 100%;
	background-clip: padding-box;
	box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4), 0 0 22px 11px rgba(255, 203, 0, 0.13);
	border: 0;
	height: 80px;
	width: 80px;
	margin-top: -40px;
	margin-left: -40px;
}
	.smile{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: -40px;
		margin-left: -40px;
		width: 80px;
		height: 80px;
		font-size: 80px;
		animation: action 10s linear infinite;
		top: 50%;
		left: 50%;
		position: absolute;
		z-index: 999;
	}
	.image{
		max-width: 50px;
		max-height: 50px;
		border-radius: 1000px;
	}
	@keyframes action {
		from {
			transform: rotate(0deg) translate(80px) rotate(0deg);
		}
		to {
		transform: rotate(360deg) translate(80px) rotate(-360deg);
		}
	}
</style>
