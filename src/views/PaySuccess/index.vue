<template>
  <div class="paysuccess">
    <div class="content_center">
      <el-card>
        <h2 style="text-align: center">恭喜您！支付成功啦！</h2>
        <div class="btn"><router-link to="/myorder">查看订单</router-link><router-link to="/sort">继续购物</router-link></div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.paysuccess {
  @import (less) '/public/common.less';
  .content_center {
    .wh(1400px;auto);
    margin: 1px auto;
    .btn {
      text-align: center;
      margin: 0 auto;
      > a {
        display: inline-block;
        .wh(100px;50px);
        margin: 0 20px;
        line-height: 50px;
        border-radius: 5px;
      }
      > a:nth-of-type(1) {
        background-color: #d70e30;
      }
      > a:nth-of-type(2) {
        background-color: #f0f0f0;
      }
    }
  }
}
</style>
