import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

//事件总线，非父子组件通信
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
