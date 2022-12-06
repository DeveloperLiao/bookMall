import Vue from 'vue'
import App from './App.vue'
//引入全局组件
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopNavBar from '@/components/TopNavBar'
import Video from '@/components/Video'
import Aduio from '@/components/Aduio'

// 按需引入elementui组件
import { Carousel, CarouselItem, Breadcrumb, BreadcrumbItem, Card, Radio, Pagination, Form, FormItem, Input, Button, Table, TableColumn, InputNumber, Image, Divider, Tag, Row, Col, Tabs, TabPane, Avatar, Rate, Progress, Message, Dialog, Backtop } from 'element-ui'
// 引入路由
import router from '@/router/index'
// 引入仓库
import store from '@/store'
//使用mock
import '@/mock'
//引入api集合
import { api } from '@/api'
// 使用自定义全局组件
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('TopNavBar', TopNavBar)
Vue.component('Video', Video)
Vue.component('Aduio', Aduio)
Vue.use(Carousel)
  .use(CarouselItem)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Card)
  .use(Radio)
  .use(Pagination)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Button)
  .use(Table)
  .use(TableColumn)
  .use(InputNumber)
  .use(Image)
  .use(Divider)
  .use(Tag)
  .use(Row)
  .use(Col)
  .use(Tabs)
  .use(TabPane)
  .use(Avatar)
  .use(Rate)
  .use(Progress)
  .use(Dialog)
  .use(Backtop)
Vue.prototype.$message = Message
Vue.config.productionTip = false
// 继承到vue的原型对象上
Vue.prototype.$api = api

new Vue({
  el: '#app',
  router,
  store,
  beforeCreate() {
    // 全局路由守卫
    this.$router.beforeEach((to, from, next) => {
      let token = this.$store.state.topnbar.token
      // 传递当前路由的topnBShow
      store.dispatch('getTopNbShow', to.meta.topnBShow)
      // 未登录状态
      if (!token) {
        if (to.path == '/myshopcart' || to.path == '/myorder' || to.path == '/trade' || to.path.includes('/pay')) {
          this.$message({ type: 'info', message: '请先登录！' })
          next('/login')
          store.dispatch('getTopNbShow', 1)
        }
      }
      next()
    })
  },
  render: h => h(App)
})
