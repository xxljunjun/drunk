#### 一、安装项目
+ npm install -g @vue/cli
+ vue create -p dcloudio/uni-preset-vue 你的项目名

#### 二、安装sass
+ npm install node-sass@4.14.1 --save-dev
+ npm install sass-loader@8.0.2 --save-dev 
***需要注意版本问题***

#### 三、安装vuex
+ npm install vuex --save
+ 新建store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// state是存储中心，所有需要被共享或缓存的数据，都在这里定义
		status: true,
		token: "7758258",
	},
	getters: {
		// getters相当于组件的计算属性，它与state相关，当它所关系的state变量发生变化时，会自动重新计算
	},
	mutations: {
		// mutations是Vuex中专门用于更新state,同步任务
		toChaneStatus(state, pyylod) {
			console.log(state)
			console.log(pyylod)
		}
	},
	actions: {
		toChang(store, payload) {
			console.log(store)
			console.log(payload)
			store.commit("toChaneStatus", payload)
		}
		// actions是专门与后端api打交道的，异步任务;提交的是 mutation，而不是直接变更状态;可以包含任意异步操作。
	},
	modules: {
		//vuex分模块处理
	}
})
export default store
+ main.js
import Vuex from 'vuex'
import store from './store'
const app = new Vue({
	store
})
app.$mount()

#### 四、封装uni.request(options)请求
+ @/serve/request.js
+ 解决跨域问题manifest.json
"h5": {
        "devServer": {
            "port": 8080,
            "disableHostCheck": true,
            "proxy": {
                "/he": {
                    "target": "https://way.jd.com",
                    "changeOrigin": true,
                    "secure": false,
                    "pathRewrite": {
                        "/he": "/he"
                    }
                }
            }
        }
    }

#### 五、导航栏与状态栏重叠
"app-plus": { 
	/* 导航栏和状态栏重叠问题 */
	"statusbar": {
		"immersed": false
	},
}
