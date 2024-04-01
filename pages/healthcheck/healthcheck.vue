<template>
	<navtitle></navtitle>
	<view class="main">
		<view class="left">
			<view class="left-1">
				<view class="title"> 历年诊断记录</view>
				<view class="item" @click="show(1)" style="animation-delay: 0s;">
					<label style="width: inherit; height: inherit;">
					<image id='image1' class="image" src="../../images/healthcheck/诊断记录_1.png" style="width: 100%; height: 100%;"></image>
					<view style="text-align: center;color: aliceblue;"> 2024</view>
					<image v-show="dis1" src="../../images/healthcheck/诊断记录_疾病显示1.png" style="width: 200px;height: 100px;bottom: 200px;right: 60px;"></image>
					</label>
				</view>
				<view class="item" @click="show(2)" style="animation-delay: -2s;">
					<label style="width: inherit; height: inherit;">
					<image class="image" src="../../images/healthcheck/诊断记录_2.png" style="width: 100%; height: 100%;"></image>
					<view style="text-align: center;color: aliceblue;"> 2023</view>
					<image v-show="dis2" src="../../images/healthcheck/诊断记录_疾病显示2.png" style="width: 200px;height: 100px;bottom: 200px;right: 60px;"></image>
					</label>
				</view>
				<view class="item" @click="show(3)" style="animation-delay: -4s;">
					<label style="width: inherit; height: inherit;">
					<image class="image" src="../../images/healthcheck/诊断记录_3.png" style="width: 100%; height: 100%;"></image>
					<view style="text-align: center;color: aliceblue;"> 2022</view>
					<image v-show="dis3" src="../../images/healthcheck/诊断记录_疾病显示3.png" style="width: 200px;height: 100px;bottom: 200px;right: 60px;"></image>
					</label>
				</view>
				<view class="item" @click="show(4)" style="animation-delay: -6s;">
					<label style="width: inherit; height: inherit;">
					<image class="image" src="../../images/healthcheck/诊断记录_4.png" style="width: 100%; height: 100%;"></image>
					<view style="text-align: center;color: aliceblue;"> 2021</view>
					<image v-show="dis4" src="../../images/healthcheck/诊断记录_疾病显示4.png" style="width: 200px;height: 100px;bottom: 200px;right: 60px;"></image>
					</label>
				</view>
				<view class="item" @click="show(5)" style="animation-delay: -8s;">
					<label style="width: inherit; height: inherit;">
					<image class="image" src="../../images/healthcheck/诊断记录_5.png" style="width: 100%; height: 100%;"></image>
					<view style="text-align: center;color: aliceblue;"> 2020</view>
					<image v-show="dis5" src="../../images/healthcheck/诊断记录_疾病显示5.png" style="width: 200px;height: 100px;bottom: 200px;right: 60px;"></image>
					</label>
				</view>
			</view>
			<view class="left-2">
				<view class="title">
					<view>体验数据速览</view>
				</view>
				<view class="content">
					<uni-table style="height: 100%;"></uni-table>
				</view>
			</view>
			<view class="left-3">
				<view class="title">
					<view>用药历史</view>
				</view>
				<view class="content">
					<uni-table style="height: 100%; font-size: 12px;"></uni-table>
				</view>
			</view>
		</view>
		<view class="center">
			<view class="hcbutton-left">
				<button class="button">头部</button>
				<button class="button">内脏</button>
				<button class="button">腿部</button>
				<button class="button">脚</button>
			</view>
			<view class="hcbutton-right">
				<button class="button">五官</button>
				<button class="button">生殖器</button>
				<button class="button">手臂</button>
				<button class="button">手</button>
			</view>
			<view>
				<view id="head-spot" class="spot"></view>
				<view id="face-spot" class="spot"></view>
				<view id="organ-spot" class="spot"></view>
				<view id="genital-spot" class="spot"></view>
				<view id="leg-spot" class="spot"></view>
				<view id="arm-spot" class="spot"></view>
				<view id="feet-spot" class="spot"></view>
				<view id="hand-spot" class="spot"></view>
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
							<image :src='src' style="width: 60px; height: 100%;"></image>
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
				<view class="content">
					有高血压病,患高血压20年，平日130/70mnHg,最高达180/110mmHg,于20年前开始服用降压药,目前使用替米沙坦氢氯噻嗪片及美托洛尔片,规律服用,血压控制130/70mHg 。冠心病史:患病时间20年,偶尔发作，服用药物里矿异山梨酯缓释片,2年前患“脑梗死”，当地医院保守治疗，未遗留后遗症。
				</view>
			</view>
			<view class="right-3">
				<view id="radar" style="width: 95%; height: 95%; z-index: 5; overflow: visible;"></view>
			</view>
			<view class="right-4">
				<view id="bp" style="width: 95%; height: 95%;top:30px"></view>
			</view>
			<view class="right-5">
				<view id="hwb" style="width: 95%; height: 95%;"></view>
			</view>
		</view>
	</view>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import navtitle from "../../components/navtitle.vue";
import {option as radaroption} from '../../assets/js/radar.js';
import {option as bpoption} from '../../assets/js/bloodPressure.js';
import {option as hwboption} from '../../assets/js/weight.js';
// import { useStore } from 'vuex';
// const store = useStore();
const user = JSON.parse(sessionStorage.getItem('user'));
const name = ref('某男子');
const gender = ref('男');
const date = getCurrentDate();
const allergy = ref('芒果过敏，头孢过敏a芒果过敏，头孢过敏a芒果过敏，头孢过敏a');
const src = ref('../../images/healthcheck/avatar.png');

const dis1 = ref(false);
const dis2 = ref(false);
const dis3 = ref(false);
const dis4 = ref(false);
const dis5 = ref(false);
function show(id){
	switch(id){
		case 1: dis1.value = ! dis1.value; break;
		case 2: dis2.value = ! dis2.value; break;
		case 3: dis3.value = ! dis3.value; break;
		case 4: dis4.value = ! dis4.value; break;
		case 5: dis5.value = ! dis5.value; break;
	}
}

function getCurrentDate() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    return year + "-" + month + "-" + day;
}

onMounted(()=>{
	const myChart1 = echarts.init(document.getElementById('radar'));
	myChart1.setOption(radaroption);
	const myChart2 = echarts.init(document.getElementById('bp'));
	myChart2.setOption(bpoption);
	const myChart3 = echarts.init(document.getElementById('hwb'));
	myChart3.setOption(hwboption);
	// src.value = user.avatar;
	name.value = user.username;
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
		font-size: 12px;
		position: relative;
		height: 80%;
		width: 100%;
		top: 30px;
		color: aliceblue;
	}
	.main{
		overflow: hidden; /* 隐藏滚动条 */
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
		position: relative;
		height: auto;
		width: 45vw;
	}
	.hcbutton-left{
		top: 200px;
		width: 100px;
		padding: 20px;
		height: 100%;
		position: absolute;
		z-index: 3;
	}
	.hcbutton-right{
		top: 200px;
		right: 0;
		width: 100px;
		padding: 20px;
		height: 100%;
		position: absolute;
		z-index: 3;
	}
	.button{
		margin-top: 30px;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 10px;
		z-index: 3;
		position: relative;	
		width: 60px;
		height: 60px;
		background: center no-repeat url('../../images/healthcheck/border.svg');
		background-size: cover;	
	}
	.button:active{
		background:center no-repeat url('../../images/healthcheck/border-selected.svg');
		background-size: cover;
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
	.spot{
		height: 30px;
		width: 30px;
		position: absolute;
		z-index: 2;
		border-radius: 20px;
		
	}
	#head-spot{
		background-color: rgba(255,0,0,0.75);
		top: 50px;
		left: 335px;
	}
	#face-spot{
		background-color: blue;
		top: 95px;
		left: 335px;
	}
	#organ-spot{
		background-color: red;
	}
	#genital-spot{
		background-color: red;
	}
	#leg-spot{
		background-color: red;
	}
	#arm-spot{
		background-color: red;
	}
	#feet-spot{
		background-color: red;
	}
	#hand-spot{
		background-color: red;
	}
	.hidden {
	  display: none;
	}
	
	
	/*right*/
	.right{
		width: 20vw;
		font-size: 15px;
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
		height: 85px;
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
		font-size: 12px;
	}
	.r1dpic{
		height: 30px;
		width: auto;
		grid-area: 1 / 1 / 3 / 2;
	}
	
	/*right2*/
	.right-2{
		z-index: 5;
		font-size: 15px;
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
		height: 130px;
		margin-top: 5px;
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
		height: 150px;
		margin-top: 20px;
		padding: 5px;
		overflow: visible;
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
		height: 100px;
		margin-top: 10px;
		padding: 5px;
		overflow: visible;
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
		height: 100px;
		margin-top: 10px;
		padding: 5px;
		overflow: visible;
	}
</style>
