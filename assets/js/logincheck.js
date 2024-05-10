//只要是未登录状态，想要跳转到名单内的路径时，直接跳到登录页
// 页面白名单，不受拦截
const loginpage = '/page/index/logreg'

const whiteList = [
	loginpage,
	'/pages/homepage/homepage',
	''
]
function hasPermission (url) {
	let islogin = sessionStorage.getItem("user");//在这可以使用token、vuex
	let a = true;
	if(typeof(islogin) == "undefined" || islogin == null){
		a = false
	}//返回布尔值
    // 在白名单中或有登录判断条件可以直接跳转
    if(whiteList.indexOf(url) !== -1 || islogin) {
        return true
    }
    return false
}
uni.addInterceptor('navigateTo', {
    // 页面跳转前进行拦截, invoke根据返回值进行判断是否继续执行跳转
    invoke (e) {
        if(!hasPermission(e.url)){
            uni.reLaunch({
                url: loginpage
            })
            return false
        }
        return true
    },
    success (e) {
    }
})
 
uni.addInterceptor('switchTab', {
    // tabbar页面跳转前进行拦截
    invoke (e) {
        if(!hasPermission(e.url)){
            uni.reLaunch({
                url: loginpage
            })
            return false
        }
        return true
    },
    success (e) {
    }
})