#### 一、安装项目

- npm install -g @vue/cli
- vue create -p dcloudio/uni-preset-vue 你的项目名

#### 二、安装 sass

- npm install node-sass@4.14.1 --save-dev
- npm install sass-loader@8.0.2 --save-dev
  **_需要注意版本问题_**

#### 三、安装 vuex

- npm install vuex --save
- 新建 store/index.js
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)

const store = new Vuex.Store({
state: {
// state 是存储中心，所有需要被共享或缓存的数据，都在这里定义
status: true,
token: "7758258",
},
getters: {
// getters 相当于组件的计算属性，它与 state 相关，当它所关系的 state 变量发生变化时，会自动重新计算
},
mutations: {
// mutations 是 Vuex 中专门用于更新 state,同步任务
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
// actions 是专门与后端 api 打交道的，异步任务;提交的是 mutation，而不是直接变更状态;可以包含任意异步操作。
},
modules: {
//vuex 分模块处理
}
})
export default store

- main.js
  import Vuex from 'vuex'
  import store from './store'
  const app = new Vue({
  store
  })
  app.\$mount()

#### 四、封装 uni.request(options)请求

- @/serve/request.js
- 解决跨域问题 manifest.json
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

#### 六、如何调试 uniapp 的微信小程序

- 1、安装微信者开发工具
- 2、在 h-builder 上设置微信者开发工具的安装路径
- 3、在 h-builder 上设置端口号http://10.240.5.230:64579
- 4、在 h-builder 上运行到小程序
- 5、发行

#### 七、集成 Uview 组件库

- 照着官网去搬就好了
