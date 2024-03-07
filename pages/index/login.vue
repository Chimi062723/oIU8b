<template>
	<uni-transition mode-class="slide-right" :show="show" duration="500">
	<view class="main">
			<view>
				<image src="../../static/uni.png"></image>
			</view>
		<uni-card class="login-card">
			<uni-forms ref="form">
				<uni-forms-item>
					<label>用户名：
					<uni-easyinput type="text" placeholder="输入用户名" />
					</label>
				</uni-forms-item>
				<uni-forms-item>
					<label>密码：
					<uni-easyinput type="password" placeholder="输入密码" />
					</label>
				</uni-forms-item>
				<uni-forms-item>
				<checkbox>是否同意隐私政策</checkbox>
				</uni-forms-item>
				<button @click='submit'>登录</button>
				<button @click='register'>注册</button>
			</uni-forms>
		</uni-card>
	</view>
	
	</uni-transition>
</template>
<script>
	export default {
		data() {
			return {
				show:true
			}
		},
		methods: {
			submit(){
				uni.navigateTo({
					url:'../homepage/homepage'
				})
			},
			register(){
				uni.navigateTo({
					url:'register',
					animationType: 'fade-in',
					animationDuration: 200
				})
			}
		}
	}
</script>
<style>
	.main{
		padding-top: 10%;
		display: flex;
		flex-direction: row;
		justify-content: space-around; 
		align-items: center;
	}
	.login-card{
		max-width: 40%;
		padding: 20px;
	}
	.container{
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		background: url(/images/background/loginbg.svg) no-repeat center center fixed ;
		background-size: cover;
		box-sizing: border-box;
	}
</style>
