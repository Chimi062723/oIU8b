<template>
    <view style="width: 100%; height: 100%;">
        <video id='video' controls="false" autoplay="false" poster="../../images/inquisition/stream.png" enable-play-gesture="false" preload='metadata' style="width: 70%; height: 70%;">
            <source>
        </video>
		<button @click="camera">nnn</button>
	</view>
</template>
<script setup>
import { onMounted } from 'vue';
	function camera(){
		if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
			const constraints = {
			  video: true,
			  audio: true,
			};
			navigator.mediaDevices
				.getUserMedia(constraints)
				.then((stream)=>{
					const video = document.evaluate('//*[@id="video"]/div/video', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
					console.log(video)
					console.log(stream)
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
</style>