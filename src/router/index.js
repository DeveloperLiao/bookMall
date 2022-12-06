// 导入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 定义路由
// 路由懒加载
const routes = [
  // show控制是否显示header和footer,topnBShow控制TopNavBar的显示效果，0表示不显示，1代表鼠标在页面顶部一定区域时显示，2代表向下滚动一定距离显示,floatBall控制是否显示悬浮球
  { path: '/', component: () => import('@/views/Home'), meta: { show: true, topnBShow: 2, floatBall: false } },
  { path: '/sort', component: () => import('@/views/Sort'), meta: { show: true, topnBShow: 0, floatBall: false } },
  { path: '/detail', component: () => import('@/views/Detail'), meta: { show: true, topnBShow: 2, floatBall: true } },
  { path: '/login', component: () => import('@/views/Login'), meta: { show: false, topnBShow: 1, floatBall: false } },
  { path: '/register', component: () => import('@/views/Register'), meta: { show: false, topnBShow: 1, floatBall: false } },
  { path: '/myorder', component: () => import('@/views/MyOrder'), meta: { show: true, topnBShow: 2, floatBall: false } },
  { path: '/myshopcart', component: () => import('@/views/MyShopCart'), meta: { show: true, topnBShow: 2, floatBall: false } },
  { path: '/trade', component: () => import('@/views/Trade'), meta: { show: true, topnBShow: 2, floatBall: false } },
  { path: '/pay', component: () => import('@/views/Pay'), meta: { show: false, topnBShow: 1, floatBall: false } },
  { path: '/paysuccess', component: () => import('@/views/PaySuccess'), meta: { show: false, topnBShow: 1, floatBall: false } }
]
// 创建路由的实例
const router = new VueRouter({
  mode: 'history',
  // 每次跳转路由滚动到页面顶部位置
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
