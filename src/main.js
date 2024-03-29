import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'


//导入echarts
import * as echarts from 'echarts'
//设置全局
Vue.prototype.$echarts = echarts
Vue.use(Element)

Vue.config.productionTip = false


Vue.prototype.axios = axios
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
