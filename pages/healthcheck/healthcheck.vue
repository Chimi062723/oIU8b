<template>
	<navtitle style="height: 120rpx;"></navtitle>
	<uni-popup type="center" background-color="rgba(0, 0, 51, 0.7)" ref="pop">
		<view class="popup" style="color: white;">
			<h2>&nbsp;头部&nbsp;检查报告概览</h2>
			<view style="width: 100%;display: flex;flex-direction: row;margin:3	0rpx">
				<button :class="{'tagbutton':true, 'tagbutton-active': tag[0]}" @click="active(0)"> 诊断 </button>
				<button :class="{'tagbutton':true, 'tagbutton-active': tag[1]}" @click="active(1)"> 药品 </button>
				<button :class="{'tagbutton':true, 'tagbutton-active': tag[2]}" @click="active(2)"> 检查 </button>
				<button :class="{'tagbutton':true, 'tagbutton-active': tag[3]}" @click="active(3)"> 手术 </button>
			</view>
			<view v-if='tag[0]'>
				<uni-table>
					<uni-tr>
						<uni-th>时间</uni-th>
						<uni-th>诊断类别</uni-th>
						<uni-th>病名</uni-th>
						<uni-th>简述</uni-th>
						<uni-th>就诊医院</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in tabledata" :key="index">
						<uni-td>{{item.time}}</uni-td>
						<uni-td>{{item.cate}}</uni-td>
						<uni-td>{{item.name}}</uni-td>
						<uni-td>{{item.desc}}</uni-td>
						<uni-td>{{item.hosp}}</uni-td>
					</uni-tr>
				</uni-table>
			</view>
			<view v-if='tag[1]'>
				<uni-table>
					<uni-tr>
						<uni-th>时间</uni-th>
						<uni-th>药名</uni-th>
						<uni-th>病名</uni-th>
						<uni-th>是否是处方药</uni-th>
						<uni-th>就诊医院</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in tabledata2" :key="index">
						<uni-td>{{item.time}}</uni-td>
						<uni-td>{{item.medName}}</uni-td>
						<uni-td>{{item.illName}}</uni-td>
						<uni-td>{{item.prescription ? '是' : '否'}}</uni-td>
						<uni-td>{{item.hosp}}</uni-td>
					</uni-tr>
				</uni-table>
			</view>
		</view>
	</uni-popup>
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
					<view style="text-align: left;display: flex; justify-content: space-between;">
						<span>体验数据速览</span>
					</view>
				</view>
				<view class="content">
					<table class="table" border="1" style="height: 90%; width: 100%; overflow-y: hidden;">
						<thead style="background-color: aliceblue;white-space:nowrap; position: sticky;top:0;color: black;">
							<th>时间</th>
							<th>身高</th>
							<th>体重</th>
							<th>体重指数</th>
							<th>血压（高压）</th>
							<th>血压（低压）</th>
							<th>血糖</th>
						</thead>					
						<tbody id='hcbody' style="white-space: nowrap;border-collapse: collapse;border-top: 2px solid navajowhite;margin-top: 2px;">
							<tr class="slidein"  v-for="(item,index) in hcdata" :key="index" style="animation-delay: {{index*100}}ms;">
								<td>{{item.time}}</td>
								<td>{{item.height}} cm</td>
								<td>{{item.weight}} kg</td>
								<td>{{item.BMI}}</td>
								<td>{{item['bloodpressure-h']}} mmHg</td>
								<td>{{item['bloodpressure-l']}} mmHg</td>
								<td>{{item.bloodsugar}} mmol/L</td>
							</tr>
						</tbody>
					</table>
					<!-- <uni-pagination :show-icon="true" :page-size="hcpage" :total="hctotal" :current="hccurrent" @change="page_hc" style="font-size: 5px;"/> -->
				</view>
			</view>
			<view class="left-3">
				<view class="title">
					<view>用药历史</view>
				</view>
				<view class="content" style="top: 10px;">
					<table class="table" border="1" style="height: 90%; width: 100%;">
						<thead style="background-color: aliceblue;white-space:nowrap; position: sticky;top:0;color: black;">
							<th>病名</th>
							<th>开始时间</th>
							<th>持续时间</th>
							<th>药名</th>
						</thead>					
						<tbody id='medbody' style="white-space: nowrap;border-collapse: collapse;border-top: 2px solid navajowhite;margin-top: 2px;">
							<tr class="slidein" v-for="(item,index) in meddata" :key="index" style=" border-top: 2px solid navajowhite;margin-top: 2px;">
								<td>{{item.illness_name}}</td>
								<td>{{item.begin_time}}</td>
								<td><span v-if="!item.duration">无</span>{{item.duration}}</td>
								<td>{{item.medicine}}</td>
							</tr>
						</tbody>
					</table>
					<!-- <uni-pagination :show-icon="true" :page-size="medpage" :total="medtotal" :current="medcurrent" @change="page_med" style="font-size: 5px;"/> -->
				</view>
			</view>
		</view>
		<view class="center">
			<view class="hcbutton-left">
				<button class="button" @click="popup('head')">头部</button>
				<button class="button" @click="popup('head')">内脏</button>
				<button class="button" @click="popup('head')">腿部</button>
				<button class="button" @click="popup('head')">脚</button>
			</view>
			<view class="hcbutton-right">
				<button class="button" @click="popup('head')">五官</button>
				<button class="button" @click="popup('head')">生殖器</button>
				<button class="button" @click="popup('head')">手臂</button>
				<button class="button" @click="popup('head')">手</button>
			</view>
			<view>
				<view id="head-spot" @click="popup('head')" class="spot"></view>
				<view id="face-spot" @click="popup('face')" class="spot"></view>
				<view id="organ-spot" @click="popup('organ')" class="spot"></view>
				<view id="genital-spot" @click="popup('genital')" class="spot"></view>
				<view id="leg-spot" @click="popup('leg')" class="spot"></view>
				<view id="arm-spot" @click="popup('arm')" class="spot"></view>
				<view id="feet-spot" @click="popup('feet')" class="spot"></view>
				<view id="hand-spot" @click="popup('hand')" class="spot"></view>
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
							<view style="text-wrap: nowrap;">就诊次数</view>
						</view>
						<view class="r1dcontainer">
							<image class="r1dpic" src="../../images/healthcheck/住院.svg"></image>
							<view>300</view>
							<view style="text-wrap: nowrap;">住院次数</view>
						</view>
						<view class="r1dcontainer">
							<image class="r1dpic" src="../../images/healthcheck/门诊.svg"></image>
							<view>300</view>
							<view style="text-wrap: nowrap;">门诊次数</view>
						</view>
					</view>
				</view>
			</view>
			<view class="right-2 ">
				<view class="title">
					<view>简要病史</view>
				</view>
				<view class="content">
					有高血压病,患高血压20年，平日130/70mnHg,最高达180/110mmHg,于20年前开始服用降压药,
					目前使用替米沙坦氢氯噻嗪片及美托洛尔片,规律服用,血压控制130/70mHg 。
					冠心病史:患病时间20年,偶尔发作，服用药物里矿异山梨酯缓释片,2年前患“脑梗死”，当地医院保守治疗，未遗留后遗症。
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
import $ from 'jquery'
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import { get, post, put } from '../../assets/js/promise.js'
import navtitle from "../../components/navtitle.vue";
import {option as radaroption} from '../../assets/js/radar.js';
import {option as bpoption} from '../../assets/js/bloodPressure.js';
import {option as hwboption} from '../../assets/js/weight.js';
// import { useStore } from 'vuex';
// const store = useStore();
let user;
const name = ref('某男子');
const gender = ref('男');
const date = getCurrentDate();
const allergy = ref('芒果过敏，头孢过敏a芒果过敏，头孢过敏a芒果过敏，头孢过敏a');
const src = ref('../../images/healthcheck/avatar.png');

const tabledata = [{
	time: '2024-3-12 17:00:01',
	cate: '门诊',
	name: '头痛',
	desc: '压力过大',
	hosp: '某某医院',
},
{
	time: '2024-1-7 00:00:01',
	cate: '急诊',
	name: '中风',
	desc: '年龄大有动脉硬化',
	hosp: '某某医院',
},
{
	time: '2021-2-12 13:32:48',
	cate: '门诊',
	name: '头痛',
	desc: '压力过大',
	hosp: '某某医院',
}]
const tabledata2 = [
	{
		time: '2024-3-12 17:00:01',
		medName: '阿司匹林肠溶片',
		illName: '头痛',
		prescription: true,
		hosp: '某某医院'
	},
	{
		time: '2024-1-7 00:00:01',
		medName: '氯吡格雷',
		illName: '头痛',
		prescription: true,
		hosp: '某某医院',
	},
	{
		time: '2021-2-12 13:32:48',
		medName: '硝苯地平缓释片',
		illName: '头痛',
		prescription: false,
		hosp: '某某医院'
	}
]
const hcpage = 9
let hcdata = ref([])
const hccurrent = ref(0);
let times = 0
let hcnext = []
const data = [
	{ 'time':'2024-3', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2024-2', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2024-1', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2023-12', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2023-11', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2023-10', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2023-8', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2023-6', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2023-3', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2021-1', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2020-6', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2020-3', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2020-1', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	{ 'time':'2019-11', 'height':'111', 'weight': '67.5', 'BMI':'21', 'bloodpressure-h': 95, 'bloodpressure-l': 63, 'bloodsugar': 4.1},
	// 更多数据...
]
const hctotal = data.length;

// function getNextHc(){
// 	const s = (hccurrent.value) * hcpage
// 	const e = s + hcpage
// 	const temp = data.slice(s, e)
// 	if(temp.length <= 0){
// 		if(hccurrent.value == 1){
// 			return []
// 		}
// 		hccurrent.value = 0;
// 		return getNextHc()
// 	}
// 	return temp
// }
// function scroll_hc(){
// 	hcdata.value =[]
// 	for(const item in hcnext){
// 		hcdata.value.push(hcnext[item])
// 	}
// 	hccurrent.value += 1;
// 	hcnext = getNextHc();
// 	// console.log(hccurrent.value, hcdata.value.length, hcnext.length)
// }
// function getData_hc(start, limit){
// 	let s = (start-1)*limit
// 	let e = s + limit
// 	const data10 = data.slice(s, e)
// 	hcdata.value = data10
// }
// function page_hc(e){
// 	hccurrent.value = e.current;
// 	getData_hc(e.current,hcpage);
// }

const medpage = 6
const meddata = ref([])
const medcurrent = ref(0);
const medtotal = ref(0);
const medall = ref([])
const mednext = ref([])

// function getNextMed(){
// 	const s = medcurrent.value * medpage
// 	const e = s + medpage
// 	const temp = medall.value.slice(s, e)
// 	if(temp.length <= 0){
// 		if(medcurrent.value == 0){
// 			return []
// 		}
// 		medcurrent.value = 0;
// 		return getNextMed()
// 	}
// 	return temp
// }
// function scrollMed(){
// 	meddata.value = mednext.value
// 	medcurrent.value += 1;
// 	mednext.value = getNextMed();
// 	// console.log(hccurrent.value, hcdata.value.length, hcnext.length)
// }
// function getData_med(start, limit){
// 	let url = 'http://localhost:41729/user/user-medicine/list/'+user.id+'?skip='+ (start - 1) +'&limit='+limit
// 	get(url).then(response =>{
// 		meddata.value = response.rows;
// 	}).catch(error=>{
// 		console.error(error.message);
// 	})
// }
// function page_med(e){
// 	medcurrent.value = e.current;
// 	getData_med(e.current,medpage);
// }
async function getTotal_med(){
	let url = '/user/user-medicine/list/'+user.id+'?skip=0&limit=1000'
	return await get(url)
}

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
	const loginpage = '/pages/index/logreg'
	let islogin = sessionStorage.getItem("user");//在这可以使用token、vuex
	// 在白名单中或有登录判断条件可以直接跳转
	if(typeof(islogin) == "undefined" || islogin == null) {
		console.log("relaunch")
	    uni.reLaunch({
	    	url:loginpage
	    })
	}
	
	const myChart1 = echarts.init(document.getElementById('radar'));
	myChart1.setOption(radaroption);
	const myChart2 = echarts.init(document.getElementById('bp'));
	myChart2.setOption(bpoption);
	const myChart3 = echarts.init(document.getElementById('hwb'));
	myChart3.setOption(hwboption);
	if(sessionStorage.getItem("user") != null)
	{
		user = JSON.parse(sessionStorage.getItem("user"))
		name.value = user.username;
		hcdata.value = data
		// hcnext = getNextHc()
		// scroll_hc()
		// setInterval(scroll_hc, 5000)
		
		getTotal_med().then((response)=>{
			medtotal.value = response.total
			medall.value = response.rows
			meddata.value = medall.value
			// mednext.value = getNextMed()
			// scrollMed()
			// setInterval(scrollMed, 5000)
		})
		setInterval(timerFn,3000);
	}else{
		uni.showToast({
			title:'未找到用户数据，请先登录'
		})
		uni.reLaunch({
			url: '/pages/index/logreg'
		})
	}
})

const pop = ref(null)
function popup(index){
	console.log(index)
	if(index == 'head'){
		pop.value.open()
	}
}
const tag = ref([true,false,false,false])
function active(index1){
	for(const item in tag.value){
		if(item == index1){
			tag.value[item] = true
		}else{
			tag.value[item] = false
		}
	}
}

setTimeout(function(){document.getElementById("rotatebody").classList.add("hidden");}, 100)

function timerFn() {
    var scrollHeight = $(".table").find("tr").outerHeight();
    $(".table").animate({
            marginTop: -scrollHeight,
        },
        500,
        function() {
            $(this)
                .css({
                    marginTop: "0px",
                })
                .find("tr:first")
                .appendTo(this);
        }
    );
}

</script>

<style scoped lang="scss">
	.popup{
		height: 800rpx;
		width: 1600rpx;
		padding: 20rpx;
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
	}
	.tagbutton{
		background: none;
		color: white;
		font-size: 30rpx;
	}
	.tagbutton-active{
		background-image: url('/images/healthcheck/selected-Tags.svg');
		background-position: bottom;
	}
	
	/*main*/
	.title{
		position: absolute;
		top: 0;
		left: 0;
		height: 7%;
		width: 100%;
		text-align: start;
		color: #f0f0f0;
		font-size: 15px;
	}
	// .content::-webkit-scrollbar {
	// 	display: none;
	// }
	.content{
		// -ms-overflow-style: none;  /* IE and Edge */
		// scrollbar-width: none;  /* Firefox */
		overflow-x: auto;
		overflow-y: hidden;
		font-size: 12px;
		position: relative;
		height: 90%;
		width: 100%;
		top: 20px;
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
		font-size: 10px;
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
		height: 30%;
		
		display: flex;
		flex-direction: row;
		align-items: center;
		
		font-size: 15px;
	}
	.item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: -25px;
		margin-left: -25px;
		width: 50px;
		height: 50px;
		animation: action 10s linear infinite;
		top: 50%;
		left: 50%;
		position: absolute;
		z-index: 3;
	}
	@keyframes action {
		from {
			transform: rotate(0deg) translate(70px) rotate(0deg);
		}
		to {
			transform: rotate(360deg) translate(70px) rotate(-360deg);
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
		height: 35%;
		margin-top: 30px;
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
	@keyframes slidein {
		from{
			transform: translateX(-200px);
		}
		to{
			transform: translateX(0px);
		}
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
		animation: zoom 2s linear infinite;
	}
	#head-spot{
		background-color: rgba(255,0,0,0.75);
		top: 50px;
		left: 335px;
	}
	#face-spot{
		background-color: rgba(0, 0, 255, 0.75);
		top: 95px;
		left: 335px;
	}
	#organ-spot{
		background-color: green;
		top: 400rpx;
		left: 335px;
	}
	#genital-spot{
		background-color: blueviolet;
		top: 650rpx;
		left: 335px;
	}
	#leg-spot{
		background-color: powderblue;
		top: 900rpx;
		left: 375px;
	}
	#arm-spot{
		background-color: plum;
		top: 320rpx;
		left: 500px;
	}
	#feet-spot{
		background-color: seagreen;
		top: 1300rpx;
		left: 380px;
	}
	#hand-spot{
		background-color: mediumaquamarine;
		top: 340rpx;
		left: 1200rpx;
	}
	.hidden {
	  display: none;
	}
	@keyframes zoom{
		from{
			transform: scale(0.75);
		}
		to{
			transform: scale(1.25);
			opacity: 50%;
		}
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
		width: 30%;
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
