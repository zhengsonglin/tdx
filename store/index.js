import Vue from 'vue'
import Vuex from 'vuex'
import datas from 'static/js/datas.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		userInfo: null,
		tabBar: 'home',
		advertisingList: [...datas.advertisingList],
		products: [...datas.products],
		category: [...datas.category],
		orders: [...datas.orders],
		currOrderState: null,	//当前订单state, 1全部
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		//设置当前订单状态
		setCurrOrderState(state, value){
			state.currOrderState = value ;
		}
	},
    getters:{
        currentColor(state){
            return ""//state.colorList[state.colorIndex]
        }
    },
	actions: {
		// lazy loading openid
		getUserOpenId: async function ({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function () { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		}
	}
})

export default store
