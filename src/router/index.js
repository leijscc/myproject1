import Vue from 'vue'

import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import SliderShow from  '@/components/SliderShow.vue'
import Login from  '@/views/Login.vue'
import test from  '@/components/test.vue'
import Register from  '@/views/Register.vue'
import Goods from  '@/views/Goods.vue'
import Cart from  '@/views/Cart.vue'
import Success from  '@/views/Success.vue'
import Search from  '@/views/Search.vue'
import User from  '@/views/User.vue'
import Buy from  '@/views/Buy.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [

    { path: '/', component: Home,children:[
      {path:'',component:SliderShow}
    ] },
    {path:'/login',component:Login},
    {path:'/test',component:test},
    {path:'/register',component:Register},
    {path:'/cart',component:Cart},
    {path:'/goods:gid',component:Goods,props:true},
    {path:'/success',component:Success},
    {path:'/buy',component:Buy},
    {path:'/search:id1/:id2/:id3/:name/:status',component:Search,props:true},
    {path:'/user:id',component:User},

  ]
})



export default router
