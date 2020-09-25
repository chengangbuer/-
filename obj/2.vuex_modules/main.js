import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

import './assets/css/base.css';// ~~ src
import './assets/js/font.js';//字体比值控制



//引入路由配置
import router from './plugins/router.js';

//引入拦截器
import './plugins/axios';

//引入全局过滤器
import './filters';

//引入动画
import 'animate.css';

//引入状态管理配置
import store from './plugins/vuex.js'

//强刷同步
let local = window.localStorage.getItem('user');

if(local){
  store.commit('user/UPDATE_USER',JSON.parse(local))
}

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


