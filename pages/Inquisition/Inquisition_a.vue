<template>
	<NavTitle style="height: 7%;"></NavTitle>
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
				<video id='video' :controls="false" autoplay="true" poster="../../images/inquisition/cameraoff.png" enable-play-gesture="false" preload='metadata' style="width: 100%; height: 100%;"></video>
			</view>
			<view id='control'>
				<view style="height: 100%;">
					<button class="control-button" @click="switchmic">
						<image v-if="controlMic" src="../../images/inquisition/u309.png" style="height: 40px;width: 40px;background-color: lightslategrey;"></image>
						<image v-else="controlMic" src="../../images/inquisition/u405.png" style="height: 40px;width: 40px;background-color: lightslategrey;"></image>	
						<p v-if="controlMic">开启静音</p>
						<p v-else>解除静音</p>
					</button>
				</view>
				<view style="height: 100%;">
					<label>
						<button class="control-button" @click="switchcamera">
							<image v-if="controlVideo" src="../../images/inquisition/u408.png" style="height: 40px;width: 40px;background-color: lightslategrey;"></image>
							<image v-else="controlVideo" src="../../images/inquisition/u400.png" style="height: 40px;width: 40px;background-color: lightslategrey;"></image>	
							<p v-if="controlVideo">关闭视频</p>
							<p v-else>开启视频</p>
						</button>
					</label>
				</view>
			</view>
			<view id='other'>
				<view style="width: 100%;">
					<video src="/static/video/v1.mp4" :autoplay="true" style="width: 100%;height: 120px;" :controls="false"></video>
					<view style="color: white; background:no-repeat url('../../images/inquisition/u396.svg');">王医生-内科</view>
				</view>
			</view>
		</view>
		<view id="chat">
			<view v-for="(message,index) in messages">
				<uni-card style="background: rgba(211, 211, 211, 0.2); border: none; color: white;">
					<h3 style=" color: white;">{{message.user}}&emsp;<span>{{message.time}}</span></h3>
					<p style=" color: white;">{{message.message}}</p>
				</uni-card>
			</view>
		</view>
		<view id="send">
			<uni-easyinput :styles="styles" type="textarea" v-model="message" placeholder="输入文字开始交流"></uni-easyinput>
			<button style="background: rgba(211, 211, 211, 0.2); color: white;" @click="send()">发送</button>
		</view>
	</view>
</template>

<script setup>
import { onReady } from '@dcloudio/uni-app'
import { time } from 'echarts';
import { onMounted,ref } from 'vue';
import NavTitle from '../../components/navtitle.vue';
let controlVideo = ref(true);
const controlMic = ref(true);
const styles = {
	background:"rgba(211, 211, 211, 0.2)",
	borderColor: "rgba(211, 211, 211, 0.2)",
	color: "white"
}
	let startTime = "2024/1/1 12:01";
	let duration = "1 小时 30 分钟 15 秒";
	let messages = ref([
		{
			user:'王医生',
			message: '什么感觉',
			time: '2024/4/13 14:59:01',
		},
		{
			user:'患者a',
			message: '头有点痛',
			time: '2024/4/13 15:00:01',
		}
	])
	function switchmic(){
		controlMic.value = !controlMic.value;
	}
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
	
	const message = ref();
	
	function send(){
		const time = Date.now()
		const timeformat = timestampToTime(time)
		console.log(timeformat)
		messages.value.push({
			user: '患者a',
			message: message.value,
			time: timeformat
		})
		console.log(message.value)
	}
	function timestampToTime(timestamp) {
		console.log('aa',timestamp)
		console.log(timestamp.toString.length)
		if(timestamp.toString().length < 13){
			timestamp = timestamp * 1000
		}
	    let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	    let Y = date.getFullYear() + '/';
		let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1):date.getMonth()+1) + '/';
		let D = (date.getDate()< 10 ? '0'+date.getDate():date.getDate())+ ' ';
		let h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours())+ ':';
		let m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
		let s = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
		return Y+M+D+h+m+s;
	}
	
	onMounted(()=>{
		camera();
	})
</script>

<style scoped>
	uni-page-body{
		height: 100%;
	}
	.control-button{
		color:white;
		height: 100%;
		background-color: #000048;
		margin-left: 30px;
		margin-right: 100rpx;
		border: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.content {
		background-image: linear-gradient(90.326486817deg, #000033 1%, #000033 19%, black 49%, #000033 81%, #000033 100%);
		display: grid; 
		grid-template-rows: 1fr 6fr 1fr;
		grid-template-columns: 4fr 1fr;
		grid-template-areas: 
			'header avatar'
			'body chat'
			'body send';
		gap: 3px;
		height: 100%;
		color: white;
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
		overflow-y: auto;
		
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