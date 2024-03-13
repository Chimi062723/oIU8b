<template>
	<view class="main">
		<view v-bind:class="{'container':true, 'right-panel-active':active2}">
			<!-- Sign Up -->
			<view class="container__form container--signup">
				<form action="#" class="form" id="form1">
					<h2 class="form__title">Sign Up</h2>
					<input type="text" placeholder="User" class="input" />
					<input type="email" placeholder="Email" class="input" />
					<input type="password" placeholder="Password" class="input" />
					<button class="btn" @click="change">Sign Up</button>
				</form>
			</view>
		
			<!-- Sign In -->
			<view class="container__form container--signin">
				<form action="#" class="form" id="form2">
					<h2 class="form__title">Sign In</h2>
					<input type="email" placeholder="Email" class="input" />
					<input type="password" placeholder="Password" class="input" />
					<a href="#" class="link">Forgot your password?</a>
					<button class="btn" @click="change">Sign In</button>
				</form>
			</view>
		
			<!-- Overlay -->
			<view class="container__overlay">
				<view class="overlay">
					<view class="overlay__panel overlay--left">
						<button class="btn" id="signIn" @click="change"                                                                                                                                                         >Sign In</button>
					</view>
					<view class="overlay__panel overlay--right">
						<button class="btn" id="signUp" @click="change">Sign Up</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from "vue";
	import "@/assets/css/login.css"
	const active2 = ref(true);
	function change(){
		console.log(active2.value)
		active2.value = !active2.value;
	}
</script>
	
<style>
</style>