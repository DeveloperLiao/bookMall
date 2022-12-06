<template>
  <div class="myShopCart">
    <div class="container_center">
      <el-card
        shadow="never"
        body-style="display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;"
      >
        <p>我的购物车</p>
      </el-card>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="序号" width="120" type="index"> </el-table-column>
        <el-table-column label="商品" width="240" align="center">
          <template slot-scope="{ row }">
            <el-image style="width: 80px; height: 100px" :src.sync="row.imgUrl"></el-image>
            <p>月亮与六便士</p>
          </template>
        </el-table-column>
        <el-table-column label="单价(元)" width="120" prop="price" align="center"> </el-table-column>
        <el-table-column label="数量" width="150" prop="num" align="center">
          <template slot-scope="{ row }">
            <el-input-number v-model="row.num" @change="handleChange" :min="1" :max="10" size="mini"> </el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="小计" width="120" prop="total" align="center"> </el-table-column>
        <el-table-column label="操作" width="120" align="center">
          <el-button type="danger">删除</el-button>
        </el-table-column>
      </el-table>
      <el-card
        shadow="never"
        body-style="display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;"
      >
        <div class="bar_left">
          <a href="#">删除选中的商品</a>
        </div>
        <div class="bar_right"><span>已选中0件商品</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>总价：1015</span>&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/trade" class="account">结算</router-link></div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyShopCart',
  data() {
    return {
      tableData: [
        {
          price: 123,
          num: 2,
          total: 246,
          imgUrl: require('/public/images/books/weiyi.png')
        },
        {
          price: 123,
          num: 2,
          total: 246,
          imgUrl: require('/public/images/books/weiyi.png')
        },
        {
          price: 123,
          num: 2,
          total: 246,
          imgUrl: require('/public/images/books/weiyi.png')
        },
        {
          price: 123,
          num: 2,
          total: 246,
          imgUrl: require('/public/images/books/weiyi.png')
        }
      ]
    }
  },
  methods: {
    handleSelectionChange() {},
    handleChange() {}
  }
}
</script>

<style lang="less" scoped>
.myShopCart {
  @import (less) '/public/common.less';
  background-color: @bgColor;
  .container_center {
    .wh(930px;auto);
    margin: 0px auto;
    padding: 10px;
    .el-card {
      margin-top: 10px;
      background-color: #ddd;
      .bar_right {
        .account {
          display: inline-block;
          .wh(100px;50px);
          text-align: center;
          line-height: 50px;
          background-color: #de0000;
          color: #fff;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
