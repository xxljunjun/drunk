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

#### 五、预留状态栏位置
```
<view class="status_bar"> <!-- 这里是状态栏 --> </view>
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
}
```

#### 六、如何调试uniapp的微信小程序
+ 1、安装微信者开发工具
+ 2、在h-builder上设置微信者开发工具的安装路径
+ 3、在h-builder上设置端口号http://10.240.5.230:64579
+ 4、在h-builder上运行到小程序
+ 5、发行

