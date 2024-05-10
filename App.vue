<script>
	export default {
		created() {
			// const loginpage = '/pages/index/logreg'
			// const whiteList = [
			// 	loginpage,
			// 	'/pages/homepage/homepage',
			// 	'/',
			// 	'',
			// ]
			// let url = this.$route.path;
			// let islogin = sessionStorage.getItem("user");//在这可以使用token、vuex
			// let a = false;
			// if(typeof(islogin) == "undefined" || islogin == null){
			// 	a = true
			// }//返回布尔值
			// // 在白名单中或有登录判断条件可以直接跳转
			// if(whiteList.indexOf(url) === -1 || !islogin) {
			//     uni.reLaunch({
			//     	url:loginpage
			//     })
			// }else{
			// 	console.log(url)
			// }
		},
		mounted() {
			// const loginpage = '/pages/index/logreg'
			// const whiteList = [
			// 	loginpage,
			// 	'/pages/homepage/homepage',
			// 	'/pages/test/test',
			// 	'/',
			// 	'',
			// ]
			// let url = this.$route.path;
			// console.log(url)
			// let islogin = sessionStorage.getItem("user");//在这可以使用token、vuex
			// let a = false;
			// if(typeof(islogin) == "undefined" || islogin == null){
			// 	a = true
			// }//返回布尔值
			// // 在白名单中或有登录判断条件可以直接跳转
			// if(whiteList.indexOf(url) === -1 || !a) {
			// 	console.log("relaunch")
			//     uni.reLaunch({
			//     	url:loginpage
			//     })
			// }
		},
		onShow() {
			
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #3c3b3d;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
