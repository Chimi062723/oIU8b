<template>
	<view class="main">
		<view v-bind:class="{'container':true, 'right-panel-active':active2}">
			<!-- 注册 -->
			<view class="container__form container--signup">
				<form action="#" class="form" id="form1">
					<h2 class="form__title">注册</h2>
					<input name="username" type="text" v-model="user.username" placeholder="用户名" class="input" />
					<input name="phone" type="tel" v-model="user.phone" placeholder="手机" class="input" />
					<input name="password" type="password" v-model="user.password" placeholder="密码" class="input" />
					<button class="btn" @click="signup">注册</button>
				</form>
			</view>
		
			<!-- 登录 -->
			<view class="container__form container--signin">
				<form action="#" class="form" id="form2">
					<h2 class="form__title">登录</h2>
					<input type="tel" v-model="user.phone" placeholder="手机号" class="input" />
					<input type="password" v-model="user.password" placeholder="密码" class="input" />
					<a href="#" class="link">Forgot your password?</a>
					<button class="btn" @click="signin">登录</button>
				</form>
			</view>
		
			<!-- Overlay -->
			<view class="container__overlay">
				<view class="overlay">
					<view class="overlay__panel overlay--left">
						<button class="btn" id="signIn" @click="change">登录</button>
					</view>
					<view class="overlay__panel overlay--right">
						<button class="btn" id="signUp" @click="change">注册</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { put,get,post } from "../../assets/js/promise.js";
import { onMounted, ref } from "vue";
// import { useStore } from "vuex";
// const store = useStore();
let user = {
	"username" : '',
	"phone" : '',
	"password" : ''
}
const active2 = ref(true);
function change(){
	active2.value = !active2.value;
}
function signin(){
	post("http://127.0.0.1:41729/user/user/login",user)
	.then(response =>{
		sessionStorage.setItem("user", JSON.stringify(response.data));
		uni.redirectTo({
		 	url:"../homepage/homepage"
		})
	}).catch(err =>{
		uni.showToast({
			title: err.message
		})
	})
}
function signup(){
	post("http://127.0.0.1:41729/user/user/add",user)
	.then(response =>{
		sessionStorage.setItem("user", JSON.stringify(response.data));
		uni.redirectTo({
		 	url:"../homepage/homepage"
		})
	}).catch(err =>{
		console.error(`Request failed.Url = ${url} . Message = ${response.statusText}`)
	})
}
</script>
	
<style>
	.main{
		font-size: 16px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		background: url("../../images/background/background.jpg");
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.form__title {
		font-weight: 300;
		margin: 0;
		margin-bottom: 1.25rem;
	}
	
	.link {
		color: #333;
		font-size: 0.9rem;
		margin: 1.5rem 0;
		text-decoration: none;
	}
	
	.container {
		background-color: #e9e9e9;
		border-radius: 0.7rem;
		box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
			0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
		height: 420px;
		width: 758px;
		overflow: hidden;
		position: relative;
	}
	
	.container__form {
		height: 100%;
		width: auto;
		position: absolute;
		top: 0;
		transition: all 0.6s ease-in-out;
	}
	
	.container--signin {
		left: 0;
		width: 50%;
		z-index: 2;
	}
	
	.container.right-panel-active .container--signin {
		transform: translateX(100%);
	}
	
	.container--signup {
		left: 0;
		opacity: 0;
		width: 50%;
		z-index: 1;
	}
	
	.container.right-panel-active .container--signup {
		animation: show 0.6s;
		opacity: 1;
		transform: translateX(100%);
		z-index: 5;
	}
	
	.container__overlay {
		height: 100%;
		left: 50%;
		overflow: hidden;
		position: absolute;
		top: 0;
		transition: transform 0.6s ease-in-out;
		width: 50%;
		z-index: 100;
	}
	
	.container.right-panel-active .container__overlay {
		transform: translateX(-100%);
	}
	
	.overlay {
		background: url("../../images/background/background.jpg");
		background-color: #008997;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100%;
		left: -100%;
		position: relative;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
		width: 200%;
	}
	
	.container.right-panel-active .overlay {
		transform: translateX(50%);
	}
	
	.overlay__panel {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		position: absolute;
		text-align: center;
		top: 0;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
		width: 50%;
	}
	
	.overlay--left {
		transform: translateX(-20%);
	}
	
	.container.right-panel-active .overlay--left {
		transform: translateX(0);
	}
	
	.overlay--right {
		right: 0;
		transform: translateX(0);
	}
	
	.container.right-panel-active .overlay--right {
		transform: translateX(20%);
	}
	
	.btn {
		background-color: #0367a6;
		background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
		border-radius: 20px;
		border: 1px solid #0367a6;
		color: #e9e9e9;
		cursor: pointer;
		font-size: 0.8rem;
		font-weight: bold;
		letter-spacing: 0.1rem;
		padding: 0.9rem 4rem;
		text-transform: uppercase;
		transition: transform 80ms ease-in;
	}
	
	.form > .btn {
		margin-top: 1.5rem;
	}
	
	.btn:active {
		transform: scale(0.95);
	}
	
	.btn:focus {
		outline: none;
	}
	
	.form {
		background-color: #e9e9e9;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 3rem;
		height: 100%;
		text-align: center;
	}
	
	.input {
		background-color: #fff;
		border: none;
		padding: 0.9rem 0.9rem;
		margin: 0.5rem 0;
		width: 100%;
	}
	
	@keyframes show {
		0%,
		49.99% {
			opacity: 0;
			z-index: 1;
		}
	
		50%,
		100% {
			opacity: 1;
			z-index: 5;
		}
	}
	
</style>