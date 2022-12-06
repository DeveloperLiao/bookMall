<template>
  <div>
    <!-- 支付 -->
    <div class="pay">
      <div class="success_msg">
        <h4>订单提交成功，请您及时付款，以便尽快为您发货~~</h4>
        <div class="time">
          <span>请你在提交订单<i style="color: #db0000">4</i>小时后之内完成支付，超时订单会自动取消，订单号：<i class="order_num">10549</i> </span>
          <span>应付金额:<i class="count" style="color: #db0000; font-size: 24px">￥4488</i></span>
        </div>
      </div>
      <el-card style="border: 2px solid #db0000" shadow="never">
        <p style="color: #db0000">重要说明:</p>
        <ol style="margin-left: 50px; margin: 10px 0">
          <li>尚书汇商场支付平台目前支持微信支付方式</li>
          <li>其它支付渠道正在调试中，尽情期待。</li>
        </ol>
      </el-card>
      <div style="text-align: right"><router-link to="/paysuccess" class="payment">立即支付</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pay'
}
</script>

<style lang="less" scoped>
.pay {
  @import (less) '/public/common.less';
  .wh(1400px;auto);
  margin: 0px auto;
  .success_msg {
    .time {
      .flex();
    }
  }
  .payment {
    text-align: center;
    display: inline-block;
    .wh(100px;50px);
    line-height: 50px;
    margin: 10px 0;
    color: #fff;
    background-color: #db0000;
    border-radius: 5px;
  }
}
</style>
>
