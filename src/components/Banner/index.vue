<template>
  <!-- banner -->
  <div class="banner">
    <el-carousel indicator-position="outside" height="400px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="!" style="width: 100%; height: 400px" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Banner',
  data() {
    return {}
  },
  mounted() {
    // 派发获取banner图片的action
    this.$store.dispatch('getBannerList', this.$api)
  },
  methods: {},
  // bannerList
  computed: mapState({
    bannerList: state => state.home.bannerList
  })
}
</script>

<style lang="less" scoped></style>
