<template>
  <!-- 热卖特辑 -->
  <div class="hot">
    <div class="hot_title clearfix">
      <span class="dot_before"></span>
      <span style="font-size: 24px; color: #363636; padding: 0 10px"><a href="#">热卖特辑</a></span>
      <span class="dot_after"></span>
      <router-link to="/sort" class="fr"
        >探索更多<svg t="1665548174893" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2616" width="14" height="14">
          <path d="M44.42112 578.12992l685.25568 0-259.18464 248.69376 183.22432 0 324.00896-310.79424-324.00896-310.8352L470.49728 205.19424l259.18464 248.66304L44.42112 453.85728 44.42112 578.12992z" p-id="2617" fill="#d81e06"></path></svg
      ></router-link>
    </div>
    <div class="hot_cards">
      <ul class="clearfix">
        <li v-for="item in hotList" :key="item.id">
          <router-link to="/sort"><img :src="item.imgUrl" alt="!" /></router-link><span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Hot',
  mounted() {
    // 派发获取热卖特辑的数据的actions
    this.$store.dispatch('getHotList', this.$api)
  },
  // hotList
  computed: mapState({
    hotList: state => state.home.hotList
  })
}
</script>

<style lang="less" scoped>
.hot {
  width: 1400px;
  margin: 30px auto;
  padding-top: 80px;

  .hot_title {
    text-align: center;
    width: 1460px;
    > a {
      display: inline-block;
      width: 70px;
      height: 30px;
      border: 1px solid #d81e06;
      border-radius: 5px;
      font-size: 14px;
      display: flex;
      align-items: center;
      &:hover {
        color: #fff;
        background-color: #d81e06;
      }
    }
    .dot_before,
    .dot_after {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #ff7e00;
      border-radius: 50%;
    }
    .dot_after {
      background-color: #ffae00;
    }
  }
  .hot_cards {
    width: 1150px;
    margin: 50px auto;
    ul li {
      float: left;
      margin: 0 40px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        display: inline-block;
        font-size: 20px;
        margin-top: 5px;
        color: #363636;
      }
      > a img {
        width: 150px;
        height: 180px;
        border-radius: 10px;
        transition: transform 0.5s;
        &:hover {
          transform: scale(1.1, 1.1);
        }
      }
    }
  }
}
</style>
