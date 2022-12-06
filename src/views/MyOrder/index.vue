<template>
  <!-- 我的订单 -->
  <div class="myOrder">
    <div class="content_center">
      <el-card shadow="never" body-style="padding: 10px">
        <p>我的订单</p>
      </el-card>
      <ul>
        <li>
          <p>订单编号：123456789&nbsp;&nbsp;2022-11-11</p>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="goods" label="商品" width="180"> </el-table-column>
            <el-table-column prop="orderDetail" label="订单详情" width="180"> </el-table-column>
            <el-table-column prop="receipt" label="收货人"> </el-table-column>
            <el-table-column prop="account" label="金额"> </el-table-column>
            <el-table-column prop="status" label="状态 "> </el-table-column>
            <el-table-column label="操作">
              <el-button type="danger">删除</el-button>
            </el-table-column>
          </el-table>
        </li>
        <li>
          <p>订单编号：123456789&nbsp;&nbsp;2022-11-11</p>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="goods" label="商品" width="180"> </el-table-column>
            <el-table-column prop="orderDetail" label="订单详情" width="180"> </el-table-column>
            <el-table-column prop="receipt" label="收货人"> </el-table-column>
            <el-table-column prop="account" label="金额"> </el-table-column>
            <el-table-column prop="status" label="状态 "> </el-table-column>
            <el-table-column label="操作">
              <el-button type="danger">删除</el-button>
            </el-table-column>
          </el-table>
        </li>
      </ul>
    </div>
    <el-pagination layout="prev, pager, next" :total="50" style="text-align: center; background-color: #f8f8f8; padding: 10px 0" background> </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data() {
    return {
      tableData: [
        {
          goods: '123',
          orderDetail: '123456',
          receipt: '张三',
          account: 123,
          status: '待付款'
        },
        {
          goods: '123',
          orderDetail: '123456',
          receipt: '张三',
          account: 123,
          status: '待付款'
        },
        {
          goods: '123',
          orderDetail: '123456',
          receipt: '张三',
          account: 123,
          status: '待付款'
        },
        {
          goods: '123',
          orderDetail: '123456',
          receipt: '张三',
          account: 123,
          status: '待付款'
        },
        {
          goods: '123',
          orderDetail: '123456',
          receipt: '张三',
          account: 123,
          status: '待付款'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.myOrder {
  @import (less) '/public/common.less';
  background-color: @bgColor;
  .content_center {
    .wh(1400px;auto);
    margin: 0px auto;
    padding: 10px;
    .el-card {
      background-color: #ddd;
    }
    ul {
      li {
        margin: 20px 0;
      }
    }
  }
}
</style>
