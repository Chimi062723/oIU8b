<template>
    <view class="navtitle">
		<view class="navtitle-left">
			<navigator class="navtitle-left-image" url="/pages/homepage/homepage">
				<image src="/images/background/logo.png" style="width: 100%; height: 100%;"></image>
			</navigator>
			<navigator class="text" url="/pages/healthcheck/healthcheck" >
				健康监测
			</navigator>
			<navigator class="text" url="/pages/Inquisition/Inquisition_a">
				远程问诊
			</navigator>
			<a class="text" href="http://47.101.34.15:18005/chat">
			<!-- <a class="text" href="/chat"> -->
				智慧医疗
			</a>
			<a class="text" href="http://47.101.34.15:18005/screen">
			<!-- <a class="text" href="/screen"> -->
				<view>饮食规划</view>
			</a>
		</view>
       <view class="navtitle-right">
           <view class="navtitle-right-image">
			   <image src="/images/navbac/用户.png" style="top:10px;width: 70%; height: 70%;"></image>
		   </view>
       </view>
   </view>
</template>
<script setup>
	
</script>
<style scoped>
	.text{
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: white;
		margin: 0;
		margin-left: 30rpx;
	}
.navtitle{
	z-index: 999;
	position: relative;
	top: 0;
    margin-left: 0px;
    height: 100%;
    width: 100%;
    background-color:#1e1e1e;
    display: flex;
    justify-content:space-between;
}
.navtitle-left{
    width: 580px;
    height: 100%;
    margin-left: 0;
    background:#1e1e1e;
    display: flex;

}
.navtitle-left-image{
    height: 100%;
    width: 120px
}
 a:hover{
    background-color:	#BEBEBE;
}
.serch{
    height: 6vh;
    width: 500px;
    background-color:#1e1e1e;
    margin: auto;
    display: flex;
}
.inputType{
  width:400px;
  height: 100%;
  text-indent: 1em;
   line-height: 100%;
  background-color: #1e1e1e;
  border: 1px solid black;
  border-top-left-radius: 17px;
  border-bottom-left-radius: 17px;
  font-size: 12px;
}
.inputType:focus{
  outline: none;   
  border: 1px solid rgb(230, 32, 213);
}
.button{
  color: #1e1e1e;
  text-align: center;
  background: rgba(204, 51, 0, 1);
  border-left:1px solid rgba(0, 0, 0, 0.45);
  width:60px;
  height: 32px;
  line-height: 100%;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px
}
.navtitle-right{
     width: 380px;
    height: 100%;
    display: flex;
}
.navtitle-right-image{
    width: 60px;
    height: 100%;
    border-radius: 30px;
    margin: auto ;
    margin-left: 40px;
}
</style>


