<template>
  <!-- 支付 -->
  <div class="bgc">
    <div class="trade">
      <div class="title">
        <h4>填写并核对订单信息</h4>
      </div>
      <el-card shadow="never" class="order_info">
        <div class="addressee_info">
          <p>收件人信息</p>
          <ul>
            <li>
              <span class="addressee selected">张三</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>上海</span>
              <el-tag effect="dark" type="info" size="mini" style="margin-left: 10px">默认</el-tag>
            </li>
            <li><span class="addressee">张三</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>上海</span></li>
          </ul>
        </div>
        <el-divider></el-divider>
        <div class="payment_methods">
          <p>支付方式</p>
          <div class="method"><span class="selected">线上支付</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>货到付款</span></div>
        </div>
        <el-divider></el-divider>
        <div class="delivery_list">
          <p>送货清单</p>
          <div class="delivery_methods">
            <p>送货方式</p>
            <div><span class="selected">天天快递</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>配送时间：预计8月10日（周三）09:00-15:00送达</span></div>
            <div><span>天天快递</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>配送时间：预计8月10日（周三）09:00-15:00送达</span></div>
          </div>
          <div class="goods_list">
            <p>清单</p>
            <el-card shadow="never">
              <ul>
                <li>
                  <div><img src="../../../public/images/books/weiyi.png" alt="!" style="width: 80px" /></div>
                  <div class="desc_content">
                    <div>
                      <div class="book_name">
                        <span>月亮与六便士</span>
                      </div>
                      <div><span style="color: #d70e30">￥4488</span>&nbsp;&nbsp;<span>1</span>&nbsp;&nbsp;<span>有货</span></div>
                    </div>
                    <div><span style="color: #d70e30; font-size: 12px">7天无理由退货</span></div>
                  </div>
                </li>
                <li>
                  <div><img src="../../../public/images/books/weiyi.png" alt="!" style="width: 80px" /></div>
                  <div class="desc_content">
                    <div>
                      <div class="book_name">
                        <span>月亮与六便士</span>
                      </div>
                      <div><span style="color: #d70e30">￥4488</span>&nbsp;&nbsp;<span>1</span>&nbsp;&nbsp;<span>有货</span></div>
                    </div>
                    <div><span style="color: #d70e30; font-size: 12px">7天无理由退货</span></div>
                  </div>
                </li>
                <li>
                  <div><img src="../../../public/images/books/weiyi.png" alt="!" style="width: 80px" /></div>
                  <div class="desc_content">
                    <div>
                      <div class="book_name">
                        <span>月亮与六便士</span>
                      </div>
                      <div><span style="color: #d70e30">￥4488</span>&nbsp;&nbsp;<span>1</span>&nbsp;&nbsp;<span>有货</span></div>
                    </div>
                    <div><span style="color: #d70e30; font-size: 12px">7天无理由退货</span></div>
                  </div>
                </li>
              </ul>
            </el-card>
          </div>
          <div class="buyer_message">
            <p>买家留言</p>
            <textarea rows="3" cols="186"></textarea>
          </div>
        </div>
      </el-card>
      <el-card shadow="never" class="order_amount">
        <p>应付金额：<span style="color: #d70e30">￥4488</span></p>
        <p>配送至：<span>北京</span>，收货人：<span>李百</span></p>
      </el-card>
      <div class="pay_btn">
        <router-link to="/pay">
          <el-button> 提交订单 </el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trade'
}
</script>

<style lang="less">
.bgc {
  @import (less) '/public/common.less';
  background-color: #f8f8f8;
  padding: 10px;
  .trade {
    .wh(1400px;auto);
    margin: 10px auto;
    .order_info {
      margin: 10px 0;
      .addressee_info,
      .payment_methods,
      .delivery_list {
        > p {
          margin-bottom: 10px;
        }
      }
      .addressee_info {
        ul {
          li {
            margin: 10px 0;
            .addressee {
              position: relative;
              .wh(80px;40px);
              line-height: 40px;
              text-align: center;
              display: inline-block;
              border: 1px solid #ebeef5;
            }
            .addressee:hover {
              cursor: pointer;
            }
          }
        }
      }
      .payment_methods {
        .method {
          > span {
            position: relative;
            .wh(80px;40px);
            line-height: 40px;
            text-align: center;
            display: inline-block;
            border: 1px solid #ebeef5;
          }
          > span:hover {
            cursor: pointer;
          }
        }
      }
      .delivery_list {
        .delivery_methods {
          margin: 0 10px;
          > p {
            margin: 10px 0;
          }
          > div {
            margin: 10px 0;
            > span:nth-of-type(1) {
              position: relative;
              .wh(80px;40px);
              line-height: 40px;
              text-align: center;
              display: inline-block;
              .border(1px;solid;#ebeef5);
            }
          }
          > div:hover {
            cursor: pointer;
          }
        }
        .goods_list {
          margin: 0 10px;
          background-color: #f7e1e0;
          > p {
            margin: 10px 0;
          }
          .el-card {
            ul {
              li {
                .flex(flex;center;center);

                margin: 20px 0;
                .desc_content {
                  .flex(flex;center;space-between);
                  flex-direction: column;
                  margin-left: 20px;
                  > div:nth-of-type(1) {
                    .wh(1200px;auto);
                    .flex(flex;center;space-between);
                  }
                }
              }
            }
          }
        }
        .buyer_message {
          margin: 0 10px;
          > p {
            margin: 10px 0;
          }
          > textarea {
            resize: none;
            outline: none;
            padding: 10px;
            font-size: 14px;
          }
        }
      }
    }
    .order_amount {
      background-color: #ebebeb;
      p {
        text-align: right;
        padding: 10px 0;
      }
    }
    .pay_btn {
      text-align: right;
      margin: 10px 0;
      a {
        button {
          .wh(120px; 50px);
          text-align: center;
          background-color: #e30000;
          font-size: 16px;
          color: #fff;
        }
      }
    }
    .selected::before {
      content: '';
      .wh(20px; 20px);
      position: absolute;
      display: block;
      bottom: 0;
      right: 0;
      background: url('../../../public/images/check.png') right bottom no-repeat;
      background-size: 13px 13px;
      z-index: 2;
    }
    .selected::after {
      content: '';
      .wh(0px; 0px);
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      .border(10px;solid;transparent);
      border-right: 10px solid #e30000;
      border-bottom: 10px solid #e30000;
    }
  }
}
</style>
