import Vue from 'vue'
import App from './App'
import store from './store'
import Vuex from 'vuex'
import uView from "uview-ui";
import './style/common.scss'
Vue.use(uView);
Vue.use(Vuex)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
