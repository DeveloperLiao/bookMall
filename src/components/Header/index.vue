<template>
  <div class="header">
    <div class="header_content">
      <div class="content_left">
        <router-link to="/"><img src="../../../public/images/logo.png" alt="!" style="width: 250px" /></router-link>
      </div>
      <div class="content_middle">
        <ul class="clearfix">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/register">注册</router-link></li>
          <li><router-link to="/myorder">我的订单</router-link></li>
          <li><router-link to="/myshopcart">我的购物车</router-link></li>
        </ul>
      </div>
      <div class="content_right">
        <router-link to="/login" v-if="!token">登录</router-link>
        <router-link to="/" v-else @click.native="loginOut">退出登录 </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  computed: {
    // 用户的token值
    token() {
      return this.$store.state.topnbar.token
    }
  },

  methods: {
    // 退出登录
    loginOut() {
      localStorage.removeItem('token')
      this.$store.dispatch('updateToken', '')
      location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 80px;
  font-size: 14px;
  .header_content {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content_middle {
      margin-left: -650px;
      ul li {
        margin: 0 20px;
        float: left;
        font-size: 18px;
      }
    }
    .content_right {
      > a {
        display: inline-block;
        width: 80px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border: 1px solid #46b448;
        border-radius: 10%;
        font-size: 18px;
      }
      > a:hover {
        background-color: #46b448;
        color: white;
      }
    }
  }
}
</style>
