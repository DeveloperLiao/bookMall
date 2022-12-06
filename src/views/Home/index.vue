<template>
  <div class="home">
    <Banner></Banner>
    <Search></Search>
    <Hot></Hot>
    <Floor></Floor>
    <el-backtop
      style="
         {
          background-color: #f2f5f6;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
          text-align: center;
          color: #1989fa;
          font-size: 14px;
        }
      "
    >
      <div>回到顶部</div>
    </el-backtop>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Search from '@/components/Search'
import Floor from '@/components/Floor'
import Hot from '@/components/Hot'
import TopNavBar from '@/components/TopNavBar'

export default {
  name: 'Home',
  components: {
    Banner,
    Search,
    Floor,
    Hot,
    TopNavBar
  }
}
</script>

<style lang="less" scoped>
.home {
  @import (less) '/public/common.less';
  background-color: @bgColor;
}
</style>
