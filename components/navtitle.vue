<template>
    <view class="title">
		<view class="title-left">
			<navigator class="title-left-image" url="/pages/homepage/homepage">
				<image src="../static/logo.png" style="width: 100%; height: 100%;"></image>
			</navigator>
			<navigator class="text" url="/pages/homepage/homepage">
　　            导航一
			</navigator>
			<navigator class="text" url="/pages/homepage/homepage">
			　　导航二
			</navigator>
			<navigator class="text" url="/pages/homepage/homepage">
			　　导航三
			</navigator>
			<navigator class="text" url="/pages/homepage/homepage">
			　　导航四
			</navigator>
		</view>
       <view class="title-right">
           <view class="title-right-image">
			   <image src="/images/navbac/用户.png" style="top:10px;width: 70%; height: 70%;"></image>
		   </view>
       </view>
   </view>
</template>
<script setup>
	
</script>
<style>
	.text{
		width: max-content;
		color: white;
		text-align: start;
	}
.title{
	z-index: 999;
	position: relative;
	top: 0;
    margin-left: 0px;
    height: 60px;
    width: 100%;
    background-color:#1e1e1e;
    display: flex;
    justify-content:space-between;
}
.title-left{
    width: 580px;
    height: 60px;
    margin-left: 0;
    background:#1e1e1e;
    display: flex;

}
.title-left-image{
    height: 60px;
    width:120px
}
span{
    font-size: 16px
}
 a{
    width: 70px;
    height: 60px;
    color: black;
    margin: 0px 10px;
    text-decoration: none;
     line-height: 60px;
     text-align: center
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
  height: 30px;
  text-indent: 1em;
   line-height: 34px;
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
  line-height: 34px;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px
}
.title-right{
     width: 380px;
    height: 60px;
    display: flex;
}
.title-right-image{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin: auto ;
    margin-left: 40px;
}
</style>


