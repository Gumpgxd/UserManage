import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import User from '../components/User/User.vue'
import Goods from '../components/Goods/Goods.vue'
import Order from '../components/Order/Order.vue'
import Information from '../components/Firm/Information.vue'
import Firm from '../components/Firm/Firm.vue'
import FirmGoods from '../components/Firm/FirmGoods.vue'
import FirmInfor from '../components/Firm/FirmInfor.vue'
import Logistics from '../components/Logistics/Logistics.vue'
import Identity from '../components/Identity/Identity.vue'
import LateManage from '../components/LateManage/LateManage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }, 
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/user'
      },
      {
        path: '/user',
        component: User
      },{
        path: '/goods',
        component: Goods
      },{
        path: '/order',
        component: Order
      },{
        path:'/information',
        component: Information
      },{
        path:'/firm',
        component: Firm
      },{
        path:'/firmgoods',
        component:FirmGoods
      },{
        path:'/firminfor',
        component:FirmInfor
      },{
        path:'/logistics',
        component:Logistics
      },{
        path:'/identity',
        component:Identity
      },{
        path:'/latemanage',
        component:LateManage
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
