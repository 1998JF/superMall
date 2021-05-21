import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'
import * as Echarts from 'echarts'

// 引入插件
import toast from 'components/common/toast'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()

// 安装插件
Vue.use(toast)

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 使用懒加载的插件
Vue.use(LazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})

// 引入注册echarts
window.Echarts = Echarts
// Vue.prototype.echarts=echarts
window.echarts = {}
for (let i in window.Echarts) {
    window.echarts[i] = window.Echarts[i]

}

import('./theme/chalk').then(() => {
  window.echarts.init = function (a1, a2, a3) {
      let instance = null
      if (typeof a2 === 'string') {
          instance = window.Echarts.init(a1, a2, a3)
      } else {
          instance = window.Echarts.init(a1, 'chalk', a2)
      }

      let setoption = instance.setOption
      instance.setOption = function (...args) {
          setoption.call(instance, ...args)
          instance.resize()
          instance.hideLoading()
      }

      let showLoading = instance.showLoading
      instance.showLoading = function (type, opts) {
          if (!opts) {
              showLoading.call(instance, type, {
                  text: '数据加载中……',
                  color: '#ffffff',
                  textColor: '#fdfcfc',
                  maskColor: 'rgba(0,0,0,0.5)',
              })
          } else {
              showLoading.call(instance, type, opts)
          }
      }

      return instance
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
