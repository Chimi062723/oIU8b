
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createStore } from 'vuex'
// const store = createStore({
// 	state: () =>({
// 		user: {
// 			avatar: '',
// 			create_by: '',
// 			create_time: '',
// 			del_flag: '',
// 			grade: '',
// 			grade_accumulate: '',
// 			id: '',
// 			ip_region: '',
// 			modify_by: '',
// 			modify_time: '',
// 			phone: '',
// 			remark: '',
// 			self_description: '',
// 			status: '',
// 			tags: '',
// 			urgent_contract: '',
// 			user_type: '',
// 			username: '',
// 		}
// 	}),
// 	mutations:{
// 		increment(state){
// 			state.id++;
// 		}
// 	}
// })
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  // app.use(store)
  return {
    app
  }
}
// #endif