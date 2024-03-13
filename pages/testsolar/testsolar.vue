<template>
	<view class="solar-syst">
	</view>
	<view class="solar-syst">
	  <view class="sun"></view>
	  <view class="mercury">
		  <image class="image" src="../../images/homepage/轮播图1.jpg"></image>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
body {
  
}
*, *::before, *::after {
  padding: 0;
  margin: 0;
}
.image{
	max-width: 50px;
	max-height: 50px;
	border-radius: 5px;
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
.solar-syst view:not(.sun) {
  border: 1px solid rgba(102, 166, 229, 0.15);
}
.solar-syst view:not(.sun)::before {
  content: "";
  position: absolute;
  left: 50%;
  border-radius: 1000px;
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
.mercury {
  height: 150px;
  width: 150px;
  margin-top: -75px;
  margin-left: -75px;
  animation: orbit 7.2s linear infinite;
}
.mercury::before {
  height: 50px;
  width: 50px;
  background: none;
  margin-left: -20px;
  margin-top: -20px;
}
@keyframes once-show {
    from {
        top: 0;
    }
}
@keyframes orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
