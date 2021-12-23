import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
    // prototype 添加一个原型属性，它设置的原型属性在所有vue实例中可使用，在实例创建前就可用
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')