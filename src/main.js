import Vue from 'vue'
import App from './App.vue'
import router from './router'
//element ui 组件引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//iconfont字体图标引入
import '@/iconfont/icon1/iconfont.css'
import '@/iconfont/icon2/iconfont.css'
import '@/iconfont/icon3/iconfont.css'
import '@/iconfont/icon4/iconfont.css'
import '@/iconfont/icon5/iconfont.css'
import '@/iconfont/icon6/iconfont.css'
import '@/iconfont/icon7/iconfont.css'
import '@/iconfont/icon8/iconfont.css'
import '@/iconfont/icon9/iconfont.css'
import '@/iconfont/icon10/iconfont.css'
import '@/iconfont/icon11/iconfont.css'
import '@/iconfont/icon12/iconfont.css'
import '@/iconfont/icon13/iconfont.css'
import '@/iconfont/icon14/iconfont.css'
import '@/iconfont/icon15/iconfont.css'
import '@/iconfont/icon16/iconfont.css'
import '@/iconfont/icon17/iconfont.css'
//图片懒加载组件引入
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
const errorimage=require('@/assets/bin.png')
const loadingimage=require('@/assets/loading4.gif')
Vue.use(VueLazyload,{
  preload:1.3,
  error:errorimage,
  loading:loadingimage,
  attempt:1
})

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
