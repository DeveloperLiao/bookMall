<template>
  <!-- 楼层 -->
  <div class="floor">
    <div v-for="item in floorList" :key="item.id">
      <div class="floor_title clearfix">
        <span class="dot_before"></span>
        <span style="font-size: 24px; color: #363636; padding: 0 10px">
          <router-link to="/detail">{{ item.title }}</router-link></span
        >
        <span class="dot_after"></span>
        <router-link to="/sort" class="fr"
          >探索更多<svg t="1665548174893" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2616" width="14" height="14">
            <path d="M44.42112 578.12992l685.25568 0-259.18464 248.69376 183.22432 0 324.00896-310.79424-324.00896-310.8352L470.49728 205.19424l259.18464 248.66304L44.42112 453.85728 44.42112 578.12992z" p-id="2617" fill="#d81e06"></path></svg
        ></router-link>
      </div>
      <div class="floor_cards">
        <ul class="clearfix">
          <li v-for="listItem in item.list" :key="listItem.id">
            <router-link to="/detail"
              ><img :src="listItem.imgUrl" alt="!" /><span
                >{{ listItem.name }}<i>￥{{ listItem.price }}</i></span
              ><span class="floor_mask"><button>查看详细</button></span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Floor',
  mounted() {
    // 派发获取floor数据的action
    this.$store.dispatch('getFloorList', this.$api)
  },
  methods: {},
  // bannerList
  computed: mapState({
    floorList: state => state.home.floorList
  })
}
</script>

<style lang="less" scoped>
/* 楼层 */
.floor {
  width: 1400px;
  margin: 0 auto;
  padding-top: 80px;
  .floor_title {
    width: 1460px;
    text-align: center;
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
  .floor_cards {
    width: 1150px;
    margin: 50px auto 0;
    ul li {
      float: left;
      margin: 0px 40px;
      border-radius: 10px;
      margin-bottom: 30px;
      > a {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.5s;
        .floor_mask {
          position: absolute;
          display: inline-block;
          width: 150px;
          height: 180px;
          background-color: rgba(0, 0, 0, 0.2);
          top: 0;
          left: 0;
          z-index: 999;
          border-radius: 10px 10px 0 0;
          display: none;
          text-align: center;
          line-height: 180px;
          button {
            width: 100px;
            height: 30px;
            background-image: linear-gradient(to bottom right, #fe1734, #ee7d63);
            border-radius: 5px;
            border: 0;
            &:hover {
              cursor: pointer;
            }
          }
        }
        span:nth-of-type(1) {
          font-size: 14px;
          background-color: #fff;
          width: 150px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border-radius: 0 0 10px 10px;
          > i {
            color: #d70e30;
          }
        }

        img {
          width: 150px;
          height: 180px;
          border-radius: 10px 10px 0 0;
        }
      }
      > a {
        &:hover {
          transform: translate(0, -5px);
          .floor_mask {
            display: block;
          }
        }
      }
    }
  }
}
</style>
