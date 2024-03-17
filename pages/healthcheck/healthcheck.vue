<template>
	<navtitle></navtitle>
	<view class="main">
		<view class="left">
			<view class="left-1">
				<view class="title"> 历年诊断记录</view>
				<view class="item" style="animation-delay: 0s;">
					<image class="image" src="../../images/healthcheck/诊断记录_1.png" style="width: 100%; height: 100%;"></image>
					<view style="text-align: center;color: aliceblue;"> 2024</view>
				</view>
				<view class="item" style="animation-delay: -2s;">
					<image class="image" src="../../images/healthcheck/诊断记录_2.png" style="width: 100%; height: 100%;"></image>
					<view style="text-align: center;color: aliceblue;"> 2023</view>
				</view>
				<view class="item" style="animation-delay: -4s;">
					<image class="image" src="../../images/healthcheck/诊断记录_3.png" style="width: 100%; height: 100%;"></image>
					<view style="text-align: center;color: aliceblue;"> 2022</view>
				</view>
				<view class="item" style="animation-delay: -6s;">
					<image class="image" src="../../images/healthcheck/诊断记录_4.png" style="width: 100%; height: 100%;"></image>
					<view style="text-align: center;color: aliceblue;"> 2021</view>
				</view>
				<view class="item" style="animation-delay: -8s;">
					<image class="image" src="../../images/healthcheck/诊断记录_5.png" style="width: 100%; height: 100%;"></image>
					<view style="text-align: center;color: aliceblue;"> 2020</view>
				</view>
			</view>
			<view class="left-2">
				<view class="title">
					<view>体验数据速览</view>
				</view>
			</view>
			<view class="left-3">
				<view class="title">
					<view>用药历史</view>
				</view>
			</view>
		</view>
		<view class="center">
			<image id="bodypic" src="../../images/healthcheck/bodystatic.png"></image>
			<image id="rotatebody" src="../../images/healthcheck/bodyrotate.png"></image>
		</view>
		<view class="right">
			<view class="right-1"></view>
			<view class="right-2"></view>
			<view class="right-3"></view>
			<view class="right-4"></view>
			<view class="right-5"></view>
		</view>
	</view>
</template>

<script setup>
	import navtitle from "../../components/navtitle.vue"
	setTimeout(function(){
		document.getElementById("rotatebody").classList.add("hidden");
	}, 6000)
</script>

<style>
	#bodypic{
		width: 45vw;
		height: 100vh;
		position: absolute;
		z-index: auto;
	}
	#rotatebody{
		width: 45vw;
		height: 100vh;
		position: absolute;
		z-index: 2;
	}
	.hidden {
	  display: none;
	}
	.title{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		text-align: start;
		color: #f0f0f0;
		font-size: inherit;
	}
	.main{
		top: 7vh;
		z-index: auto;
		position: absolute;
		background-image: linear-gradient(90.3264868169817deg, rgba(0, 0, 51, 1) 1%,
		rgba(0, 0, 51, 1) 19%,
		rgba(0, 0, 0, 1) 49%,
		rgba(0, 0, 51, 1) 81%,
		rgba(0, 0, 51, 1) 100%);
		height: 100%;
		width: 100vw;
		display: flex;
		flex-direction: row;
		padding: 40px;
	}
	.left{
		width: 20vw;
		height: 100%;
		font-size: 12px;
	}
	.left-1{
		box-shadow: 0 0 1.5vw #1f69b9b9 inset;
		background: linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom;
		background-repeat: no-repeat;
		background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
		position: relative;
		height: 40%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.left-2{
		box-shadow: 0 0 1.5vw #1f69b9b9 inset;
		background: linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom;
		background-repeat: no-repeat;
		background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
		position: relative;
		height: 25%;
		margin-top: 40px;
		display: flex;
		flex-direction: row;
	}
	.left-3{
		box-shadow: 0 0 1.5vw #1f69b9b9 inset;
		background: linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom;
		background-repeat: no-repeat;
		background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
		position: relative;
		height: 25%;
		display: flex;
		margin-top: 20px;
		flex-direction: row;
		align-items: center;
	}
	.center{
		margin-left: 50px;
		margin-right: 50px;
		height: auto;
		width: 45vw;
	}
	.right{
		width: 20vw;
	}
	.right-1{
		box-shadow: 0 0 1.5vw #1f69b9b9 inset;
		background: linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom;
		background-repeat: no-repeat;
		background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
		width: 100%;
		height: 180px;
		padding: 5px;
	}
	.right-2{
		box-shadow: 0 0 1.5vw #1f69b9b9 inset;
		background: linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom;
		background-repeat: no-repeat;
		background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
		width: 100%;
		height: 145px;
		margin-top: 10px;
		padding: 5px;
	}
	.right-3{
		box-shadow: 0 0 1.5vw #1f69b9b9 inset;
		background: linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom;
		background-repeat: no-repeat;
		background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
		width: 100%;
		height: 150px;
		margin-top: 30px;
		padding: 5px;
	}
	.right-4{
		box-shadow: 0 0 1.5vw #1f69b9b9 inset;
		background: linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom;
		background-repeat: no-repeat;
		background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
		width: 100%;
		height: 160px;
		margin-top: 15px;
		padding: 5px;
	}
	.right-5{
		box-shadow: 0 0 1.5vw #1f69b9b9 inset;
		background: linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) left top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) right top,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) left bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom,
			linear-gradient(#33cdfa, #33cdfa) right bottom;
		background-repeat: no-repeat;
		background-size: 0.1vw 1.5vw, 1.5vw 0.1vw;
		width: 100%;
		height: 160px;
		margin-top: 15px;
		padding: 5px;
	}
	.item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: -40px;
		margin-left: -40px;
		width: 80px;
		height: 80px;
		animation: action 10s linear infinite;
		top: 50%;
		left: 50%;
		position: absolute;
		z-index: 999;
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
