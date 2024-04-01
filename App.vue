<script>
	import autofit from 'autofit.js';
	export default {
		mounted() {
			// autofit.init()
		},
		onLaunch() {
			
		},
		onShow() {
		},
		globalData: {
			user: {
				avatar: '',
				create_by: '',
				create_time: '',
				del_flag: '',
				grade: '',
				grade_accumulate: '',
				id: '',
				ip_region: '',
				modify_by: '',
				modify_time: '',
				phone: '',
				remark: '',
				self_description: '',
				status: '',
				tags: '',
				urgent_contract: '',
				user_type: '',
				username: '',
			},
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
