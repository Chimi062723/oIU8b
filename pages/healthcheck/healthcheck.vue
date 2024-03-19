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
				<view class="content">
					<uni-table style="background: none;"></uni-table>
				</view>
			</view>
			<view class="left-3">
				<view class="title">
					<view>用药历史</view>
				</view>
			</view>
		</view>
		<view class="center">
			<view class="button">
				
			</view>
			<image id="bodypic" src="../../images/healthcheck/bodystatic.png"></image>
			<image id="rotatebody" src="../../images/healthcheck/bodyrotate.png"></image>
		</view>
		<view class="right">
			<view class="right-1">
				<view class="title">
					<view>患者信息</view>
				</view>
				<view class="content" id="r1content">
					<view id='r1data'>
						<view id='r1avatar'>
							<image src='../../images/healthcheck/avatar.png' style="width: 100%; height: 100%;"></image>
						</view>
						<view id='r1detail'>
							<view id='r1name'>{{name}}</view>
							<view id='r1gender'>{{gender}}</view>
							<view id='r1date'>{{date}}</view>
							<view id='r1allergy'>过敏史:{{allergy}}</view>
						</view>
					</view>
					<view id='r1down'>
						<view class="r1dcontainer">
							<image class="r1dpic" src="../../images/healthcheck/就诊.svg"></image>
							<view>300</view>
							<view>就诊次数</view>
						</view>
						<view class="r1dcontainer">
							<image class="r1dpic" src="../../images/healthcheck/住院.svg"></image>
							<view>300</view>
							<view>住院次数</view>
						</view>
						<view class="r1dcontainer">
							<image class="r1dpic" src="../../images/healthcheck/门诊.svg"></image>
							<view>300</view>
							<view>门诊次数</view>
						</view>
					</view>
				</view>
			</view>
			<view class="right-2 ">
				<view class="title">
					<view>简要病史</view>
				</view>
			</view>
			<view class="right-3 ">
				<view id="radar" style="width: 100%; height: 100%;"></view>
			</view>
			<view class="right-4">
				<view id="bp" style="width: 100%; height: 100%;"></view>
			</view>
			<view class="right-5">
				<view id="hwb" style="width: 100%; height: 100%;"></view>
			</view>
		</view>
	</view>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import navtitle from "../../components/navtitle.vue";
import {option as radaroption} from '../../assets/js/radar.js';
import {option as bpoption} from '../../assets/js/bloodPressure.js';
import {option as hwboption} from '../../assets/js/weight.js';
const name = '某男子';
const gender = '男';
const date = '2024.3.19';
const allergy = '芒果过敏，头孢过敏a芒果过敏，头孢过敏a芒果过敏，头孢过敏a'
onMounted(()=>{
	const myChart1 = echarts.init(document.getElementById('radar'));
	myChart1.setOption(radaroption);
	const myChart2 = echarts.init(document.getElementById('bp'));
	myChart2.setOption(bpoption);
	const myChart3 = echarts.init(document.getElementById('hwb'));
	myChart3.setOption(hwboption);
})
setTimeout(function(){
	document.getElementById("rotatebody").classList.add("hidden");
}, 6000)

</script>

<style>
	/*main*/
	.title{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		text-align: start;
		color: #f0f0f0;
		font-size: inherit;
	}
	.content{
		position: relative;
		height: 80%;
		width: 100%;
		top: 30px;
		color: aliceblue;
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
	
	
	/*left*/
	.left{
		width: 20vw;
		height: 100%;
		font-size: 20px;
	}
	/*left1*/
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
		
		font-size: 20px;
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
		z-index: 3;
	}
	@keyframes action {
		from {
			transform: rotate(0deg) translate(80px) rotate(0deg);
		}
		to {
			transform: rotate(360deg) translate(80px) rotate(-360deg);
		}
	}
	
	/*left2*/
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
	
	/*left3*/
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
	
	
	/*center*/
	.center{
		margin-left: 50px;
		margin-right: 50px;
		height: auto;
		width: 45vw;
	}
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
	
	
	/*right*/
	.right{
		width: 20vw;
		font-size: 20px;
	}
	/*right1*/
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

		position: relative;
		width: 100%;
		height: 150px;
		padding: 5px;
	}
	#r1data{
		display: flex;
		height: 75px;
		width: 100%;
	}
	#r1avatar{
		width: 60px;
		height: 75px;
	}
	#r1detail{
		max-width: 350px;
		margin-left: 20px;
		display: grid;
		grid-template-columns: 1.5fr 1fr 2fr;
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		grid-template-areas: 'a b c d';
		grid-template-areas:
			'a b c' 
			'd d d';
	}
	#r1allergy{
		grid-area: d;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	#r1down{
		display: flex;
		height: 40px;
	}
	.r1dcontainer{
		padding-left: 20px;
		height: 100%;
		width: 33%;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 5px;
		grid-row-gap: 10px;
		font-size: 15px;
	}
	.r1dpic{
		height: 100%;
		width: auto;
		grid-area: 1 / 1 / 3 / 2;
	}
	
	/*right2*/
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
		position: relative;
		width: 100%;
		height: 145px;
		margin-top: 10px;
		padding: 5px;
	}
	
	/*right3*/
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
		position: relative;
		width: 100%;
		height: 250px;
		margin-top: 40px;
		padding: 5px;
	}
	
	/*right4*/
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
		position: relative;
		width: 100%;
		height: 200px;
		margin-top: 20px;
		padding: 5px;
	}
	/*right5*/
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
		position: relative;
		width: 100%;
		height: 200px;
		margin-top: 20px;
		padding: 5px;
	}
</style>
