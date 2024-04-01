<template>
	<NavTitle></NavTitle>
	<view class="content">
		<view id="header">
			<h1>第一次面诊</h1>
			<p>开始时间:&ensp;{{startTime}}&emsp;持续时间:&ensp;{{duration}}</p>
		</view>
		<view id="avatar">
			<image src="../../images/inquisition/u59.png" style="width: 50px;height: 50px;"></image>
			<view>患者a</view>
		</view>
		<view id="body">
			<view id='streamer'>
				<video id='video' controls="false" autoplay="true" poster="../../images/inquisition/stream.png" enable-play-gesture="false" preload='metadata' style="width: 100%; height: 100%;"></video>
			</view>
			<view id='control'>
				<view style="height: 100%;">
					<button class="control-button" >
						<image src="../../images/inquisition/u405.png" style="height: 40px;width: 40px;"></image>
						解除静音
					</button>
				</view>
				<view style="height: 100%;">
					<label>
						<button class="control-button" @click="switchcamera">
							<image src="../../images/inquisition/u400.png" style="height: 40px;width: 40px;"></image>	
							<p v-if="controlVideo">开启视频</p>
							<p v-else>关闭视频</p>
						</button>
					</label>
				</view>
			</view>
			<view id='other'>
				<view style="width: 100%;">
					<image src="../../images/inquisition/u320.png" style="width: 100%;height: 120px;"></image>
					<view style="color: white; background:no-repeat url('../../images/inquisition/u396.svg');">王医生-xx科</view>
				</view>
				<view style="width: 100%;">
					<image src="../../images/inquisition/u320.png" style="width: 100%;height: 120px;"></image>
					<view style="color: white; background:no-repeat url('../../images/inquisition/u396.svg');">王医生-xx科</view>
				</view>
				<view style="width: 100%;">
					<image src="../../images/inquisition/u320.png" style="width: 100%;height: 120px;"></image>
					<view style="color: white; background:no-repeat url('../../images/inquisition/u396.svg');">王医生-xx科</view>
				</view>
				<view style="width: 100%;">
					<image src="../../images/inquisition/u320.png" style="width: 100%;height: 120px;"></image>
					<view style="color: white; background:no-repeat url('../../images/inquisition/u396.svg');">王医生-xx科</view>
				</view>
				<view style="width: 100%;">
					<image src="../../images/inquisition/u320.png" style="width: 100%;height: 120px;"></image>
					<view style="color: white; background:no-repeat url('../../images/inquisition/u396.svg');">王医生-xx科</view>
				</view>
			</view>
		</view>
		<view id="chat">
			<view v-for="(message,index) in messages">
				<uni-card>
					<h3>{{message.user}}&emsp;<span>{{message.time}}</span></h3>
					<p>{{message.message}}</p>
				</uni-card>
			</view>
		</view>
		<view id="send">
			<uni-easyinput type="textarea" placeholder="输入文字开始交流"></uni-easyinput>
			<button>发送</button>
		</view>
	</view>
</template>

<script setup>
import { onReady } from '@dcloudio/uni-app'
import { time } from 'echarts';
import { onMounted,ref } from 'vue';
import NavTitle from '../../components/navtitle.vue';
var controlVideo = ref(true);
	let startTime = "2024/1/1 12:01";
	let duration = "1 小时 30 分钟 15 秒";
	let messages = [
		{
			user:'王医生',
			message: '什么感觉',
			time: '2000/2/3 19:50:12',
		},
		{
			user:'患者a',
			message: '饿了',
			time: '2000/2/3 19:50:12',
		}
	]
	function switchcamera(){
		if(controlVideo){	
			const video = document.evaluate('//*[@id="video"]/div/video', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
			console.log(controlVideo);
			video.srcObject = null;
			controlVideo = !controlVideo;
		}else{
			const video = document.evaluate('//*[@id="video"]/div/video', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
			camera()
			console.log(controlVideo);
			controlVideo = !controlVideo;
		}
	}
	function camera(){
		if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
			const constraints = {
			  video: {
			    width: {
			      min: 1280,
			      ideal: 1920,
			      max: 2560,
			    },
			    height: {
			      min: 720,
			      ideal: 1080,
			      max: 1440,
			    },
			  },
			  audio: true,
			};
			navigator.mediaDevices
				.getUserMedia({ video: true })
				.then((stream)=>{
					const video = document.evaluate('//*[@id="video"]/div/video', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
					video.srcObject = stream;
				})
				.catch((err)=>{
					uni.showToast({
						title:"请提供摄像头权限"
					})
					console.error(err)
				})
		}else{
			uni.showToast({
				title: '不支持摄像头，请以文字描述'
			})
		}
	}
	onMounted(()=>{
		camera();
	})
</script>

<style>
	uni-page-body{
		height: 100%;
	}
	.control-button{
		height: 100%;
		background: lightblue;
		border: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.content {
		background-color: whitesmoke;
		display: grid; 
		grid-template-rows: 1fr 6fr 1fr;
		grid-template-columns: 4fr 1fr;
		grid-template-areas: 
			'header avatar'
			'body chat'
			'body send';
		gap: 3px;
		height: 100%;
	}
	  
	#header {
		padding-top: 20px;
		grid-area: header;
	}
	#avatar {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		grid-area: avatar;
	}
	#body {
		grid-area: body;
		display: grid;
			
		grid-template-rows: 6fr 1fr;
		grid-template-columns: 4fr 1fr;
		
		grid-template-areas: 
				'streamer other'
				'control other';
		
		gap: 0px;
		height: 100%;
	}
	#chat {
		grid-area: chat;
	   
	}
	#send {
		grid-area: send;
		display: inline;
	}	  
	#other {
		grid-area: other;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
	#streamer {
		grid-area: streamer;
	}
	#control {
		display: flex;
		grid-area: control;
	}
</style>