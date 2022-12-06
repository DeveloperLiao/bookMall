<template>
  <!-- 顶部悬浮导航栏  -->
  <div class="top_navBar">
    <div class="top_navBar_content">
      <div class="navBar_left">
        <a href="#"><img src="../../../public/images/logo.png" alt="!" style="width: 250px" /></a>
      </div>
      <div class="navBar_middle">
        <ul class="clearfix">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/register">注册</router-link></li>
          <li><router-link to="/myorder">我的订单</router-link></li>
          <li><router-link to="/myshopcart">我的购物车</router-link></li>
        </ul>
        <div class="categories">
          全站<svg t="1665578510248" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7479" width="11" height="11">
            <path d="M301.99808 44.9792l-47.04768 47.09888 419.9424 419.98848-419.9424 419.90144 47.0528 47.0528 419.93728-419.89632h0.00512l47.104-47.09888-47.0528-47.04768z" p-id="7480" fill="#666666"></path>
          </svg>
          <div class="all">
            <ul>
              <li><a href="#">言情</a></li>
              <li><a href="#"> 文艺</a></li>
              <li><a href="#"> 武侠</a></li>
              <li><a href="#"> 科技</a></li>
              <li><a href="#"> 心理</a></li>
              <li><a href="#"> 教育</a></li>
              <li><a href="#"> 童书</a></li>
              <li><a href="#"> 生活</a></li>
              <li><a href="#"> 经营</a></li>
              <li><a href="#"> 期刊</a></li>
              <li><a href="#"> 其他</a></li>
            </ul>
          </div>
        </div>
        <input type="text" placeholder="输入你想要的书籍" />
        <a href="#"
          ><svg t="1665410753862" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2872" width="32" height="32">
            <path
              d="M405.333333 725.333333a320 320 0 1 0 0-640 320 320 0 0 0 0 640z m0 42.666667a362.666667 362.666667 0 1 1 0-725.333333 362.666667 362.666667 0 0 1 0 725.333333zM730.496 730.496a42.666667 42.666667 0 0 0 0 60.373333l150.869333 150.826667a42.666667 42.666667 0 1 0 60.330667-60.330667l-150.826667-150.869333a42.666667 42.666667 0 0 0-60.373333 0z m-30.165333-30.165333a85.333333 85.333333 0 0 1 120.704 0l150.826666 150.869333a85.333333 85.333333 0 1 1-120.661333 120.661333l-150.869333-150.826666a85.333333 85.333333 0 0 1 0-120.704z"
              p-id="2873"
              fill="#ffffff"
            ></path>
            <path d="M640 670.165333l30.208-30.165333 70.229333 70.229333-30.165333 30.165334z" p-id="2874" fill="#ffffff"></path></svg
        ></a>
      </div>
      <div class="navBar_right">
        <router-link to="/login" v-if="!token">登录</router-link>
        <router-link to="/" v-else @click.native="loginOut">退出登录 </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import tool from '@/utils/tool'
export default {
  name: 'TopNavBar',
  methods: {
    // 退出登录
    loginOut() {
      localStorage.removeItem('token')
      this.$store.dispatch('updateToken', '')
      location.reload()
    },
    // 顶部导航栏悬浮时显示
    navHoverShow() {
      let { debounce } = tool
      let topNB = $('.top_navBar')
      let all = $('.all')
      // 顶部导航栏的高度
      let topNBHg = topNB.innerHeight()
      // flag控制topNB向上滑动的开关
      let flag = true
      // body对象的鼠标移动事件
      $('body').bind(
        'mousemove',
        debounce(
          e => {
            // 解绑scroll事件
            $(window).off('scroll')
            // 当前鼠标在整个页面的纵坐标e.pageY小于顶部导航栏的高度则显示
            if (e.pageY < topNBHg) {
              // 向下滑动
              topNB.slideDown()
              all.hover(
                () => {
                  // 悬浮在all时，关闭开关
                  flag = false
                },
                () => {
                  // 离开all时，打开开关
                  flag = true
                  // 向上滑动
                  topNB.slideUp()
                }
              )
            } else if (flag) {
              topNB.slideUp()
            }
          },
          300,
          true
        )
      )
    },
    //滚动一定距离时显示topNavBar
    navSrocllShow() {
      let { throttle } = tool
      let topNB = $('.top_navBar')
      // 解绑mousemove事件
      $('body').off('mousemove')
      // 隐藏topnBar
      topNB.hide()
      // 滚动条事件
      $(window).bind(
        'scroll',
        throttle(function () {
          // 向上滚动的距离大于一定距离时，显示topNavBar
          if (this.pageYOffset > 500) {
            topNB.slideDown()
          } else {
            topNB.slideUp()
          }
        }, 1000)
      )
    }
  },
  watch: {
    topnBShow: {
      handler: function (newVal) {
        // 在下一次DOM更新循环后再执行，及DOM渲染成功后执行
        this.$nextTick(() => {  
          // 在对应页面显示不同效果
          if (newVal == 1) {
            this.navHoverShow()
          } else if (newVal == 2) {
            this.navSrocllShow()
          } else if (newVal == 0) {
            $('body').off('mousemove')
            $(window).off('scroll')
          }
        })
      },
      immediate: true
    }
  },
  computed: {
    topnBShow() {
      return this.$store.state.topnbar.topNbShow || 2
    },
    // 用户的token值
    token() {
      return this.$store.state.topnbar.token
    }
  }
}
</script>

<style lang="less" scoped>
/* 顶部悬浮导航栏 */
.top_navBar {
  width: 100%;
  position: fixed;
  background-color: #fff;
  box-shadow: 5px 5px 10px #ccc;
  height: 80px;
  z-index: 999;
  display: none;
  .top_navBar_content {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navBar_middle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: -204px;
      > ul > li {
        margin: 0 20px;
        float: left;
        font-size: 18px;
      }
      .categories {
        position: relative;
        width: 60px;
        height: 50px;
        font-size: 14px;
        color: #666;
        text-align: center;
        line-height: 50px;
        background-color: #fff;
        border-radius: 10px 0px 0px 10px;
        &:hover {
          cursor: pointer;
          .all {
            opacity: 1;
            display: block;
          }
        }
        .all {
          position: absolute;
          top: 50px;
          background-color: #fff;
          opacity: 0;
          transition: opacity 0.5s;
          display: none;
          ul li {
            line-height: 30px;
            > a {
              display: inline-block;
              width: 80px;
              height: 30px;
              font-size: 12px;
              text-align: center;
              line-height: 30px;
              &:hover {
                color: #fff;
                background-image: linear-gradient(to right, #ff1534, #ef7c63);
              }
            }
          }
        }
      }
      input {
        width: 300px;
        height: 48px;
        outline: none;
        border: 1px solid #ccc;
        border-right: 0;
        border-radius: 10px 0 0 10px;
        padding-left: 5px;
      }
      > a {
        display: inline-block;
        width: 80px;
        height: 50px;
        line-height: 70px;
        text-align: center;
        background-color: #d70e30;
        color: white;
        border-radius: 0 10px 10px 0;
      }
    }
    .navBar_right {
      > a {
        display: inline-block;
        width: 80px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border: 1px solid #46b448;
        border-radius: 10%;
        font-size: 18px;
        &:hover {
          background-color: #46b448;
          color: white;
        }
      }
    }
  }
}
</style>
