<template>
  <!-- 详情 -->
  <div class="detail">
    <!-- 居中 -->
    <div class="center_content">
      <!-- 面包屑 -->
      <div class="bread">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">文艺</a></el-breadcrumb-item>
          <el-breadcrumb-item>国外</el-breadcrumb-item>
          <el-breadcrumb-item>小王子</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 商品详细信息 -->
      <div class="detail_content1">
        <div class="detail_content1_left">
          <!-- 放大镜 -->
          <div class="zoom">
            <div class="container" ref="container">
              <!-- 原来的图片 -->
              <div class="orgin" ref="orgin" @mouseover="loupe" @mouseleave="hidden">
                <img src="../../../public/images/books/weiyi.png" alt="!" ref="orginImg" />
                <!-- 遮盖层 -->
                <div class="cover" ref="cover"></div>
              </div>
              <!-- 被放大的图片 -->
              <div class="bigImg" ref="bigImg"></div>
            </div>
          </div>
          <!-- 图片列表 -->
          <div class="imgList">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="../../../public/images/books/weiyi.png" alt="!" @click="changeImg" />
                </div>
                <div class="swiper-slide">
                  <img src="../../../public/images/books/weiyi2.png" alt="!" @click="changeImg" />
                </div>
                <div class="swiper-slide">
                  <img src="../../../public/images/books/weiyi3.png" alt="!" @click="changeImg" />
                </div>
                <div class="swiper-slide">
                  <img src="../../../public/images/books/weiyi4.png" alt="!" @click="changeImg" />
                </div>
                <div class="swiper-slide">
                  <img src="../../../public/images/books/weiyi5.png" alt="!" @click="changeImg" />
                </div>
                <div class="swiper-slide">
                  <img src="../../../public/images/books/weiyi6.png" alt="!" @click="changeImg" />
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        <div class="detail_content1_right">
          <div class="book_name">月亮与六便士 <Video></Video></div>
          <div class="book_desc">作品以法国后印象派画家保罗·高更的生平为素材，描述了一个原本平凡的伦敦证券经纪人斯特里克兰德，突然着了艺术的魔，抛妻弃子，绝弃了旁人看来优裕美满的生活，奔赴南太平洋的塔希提岛，用画笔谱写出自己光辉灿烂的生命，把生命的价值全部注入绚烂的画布的故事。</div>
          <el-divider></el-divider>
          <div><span class="author">作者:威廉· 萨默赛特·毛姆著</span>&nbsp;&nbsp;<span class="publisher">出版社：北京文艺出版社</span>&nbsp;&nbsp;<span class="pub_date">出版时间：2022年10月</span></div>
          <el-card shadow="never">
            <div><span>价格&nbsp;&nbsp;</span><span class="price">￥43</span><span class="comment">24条评论</span></div>
            <div>
              <span>促销&nbsp;&nbsp;</span><span> <el-tag type="danger" effect="dark" style="background-color: #e52222" size="mini"> 限时购</el-tag> </span><span class="limit_time">时间：2022.10.16 23:00:01-2022.10.24 23:59:59, 抓紧抢购</span>
            </div>
          </el-card>
          <div><span class="address">配送至广东省 深圳市 宝安区 &nbsp;&nbsp;&nbsp;&nbsp;有货</span></div>
          <div>
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" size="small"> </el-input-number>
            <a class="add_cart">
              <el-button @click="addCart">加入购物车</el-button>
            </a>
            <a class="purchase">
              <router-link to="/trade"><el-button>立即购买</el-button></router-link>
            </a>
          </div>
        </div>
      </div>
      <!-- 商品详细信息 -->
      <div class="detail_content2">
        <el-row :gutter="20">
          <el-col :span="4" class="detail_content2_left">
            <el-card shadow="never">
              <p style="color: #aaa; font-size: 14px; text-align: center">猜你喜欢</p>
              <ul>
                <li>
                  <el-divider></el-divider>
                  <a href="#">
                    <img src="../../../public/images/books/weiyi.png" alt="!" style="width: 100px" />
                  </a>
                  <p style="color: #e52222">￥27</p>
                  <p style="font-size: 14px">月亮与六便士</p>
                  <p style="font-size: 14px">威廉· 萨默赛特·毛姆著</p>
                </li>
                <li>
                  <el-divider></el-divider>
                  <a href="#">
                    <img src="../../../public/images/books/keji.png" alt="!" style="width: 100px" />
                  </a>
                  <p style="color: #e52222">￥48</p>
                  <p style="font-size: 14px">时间简史</p>
                  <p style="font-size: 14px">霍金</p>
                </li>
                <li>
                  <el-divider></el-divider>
                  <a href="#">
                    <img src="../../../public/images/books/wuxia.png" alt="!" style="width: 100px" />
                  </a>
                  <p style="color: #e52222">￥87</p>
                  <p style="font-size: 14px">天龙八部</p>
                  <p style="font-size: 14px">金庸</p>
                </li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="20" class="detail_content2_left">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="商品详情" name="first" class="goods_detail">
                <ul>
                  <li>开本：32开</li>
                  <li>纸张：胶版纸</li>
                  <li>包装：平装</li>
                  <li>是否套装：否</li>
                  <li>国际标准书号ISBN:123456789101</li>
                  <li>所属分类：文艺/国外/月亮与六便士</li>
                </ul>
                <el-divider content-position="left">产品特色</el-divider>
                <img src="../../../public/images/books/weiyi.png" alt="!" />
                <img src="../../../public/images/books/weiyi.png" alt="!" />
                <img src="../../../public/images/books/weiyi.png" alt="!" />
                <img src="../../../public/images/books/weiyi.png" alt="!" />
              </el-tab-pane>
              <el-tab-pane label="商品评论" name="second" class="goods_comment">
                <el-divider content-position="left">评论数（13）</el-divider>
                <el-row :gutter="20">
                  <el-col :span="4" class="goods_comment_left">
                    <span class="well_received"> 好评率 </span>
                    <el-progress type="circle" :percentage="99.9" color="#ff2832"></el-progress>
                  </el-col>
                  <el-col :span="20" class="goods_comment_right">
                    <div>
                      <p>买过的人觉得</p>
                      <p>
                        <a href="#">
                          <el-tag type="danger">经典（1）</el-tag>
                        </a>
                        <a href="#">
                          <el-tag type="danger">质量好（1）</el-tag>
                        </a>
                        <a href="#">
                          <el-tag type="danger">引人入胜（1）</el-tag>
                        </a>
                      </p>
                    </div>
                  </el-col>
                </el-row>
                <el-tabs v-model="activeName1">
                  <el-tab-pane label="全部（3）" name="first1" class="user_comment">
                    <ul>
                      <li>
                        <div class="user_comment_left">
                          <el-avatar src="/images/books/touxiang.png" :size="80"></el-avatar>
                          <span>一只</span>
                        </div>
                        <div class="user_comment_right">
                          <el-rate v-model="value1" disabled></el-rate>
                          <p>全书阅读完毕。感觉笔触细腻，感情真挚！淳朴！足不出户，可领阅名山大川雄伟壮丽景致，大江大湖之波澜壮阔美景！商业中人，有此雅量，大赞，此书值得一读</p>
                          <p>2022-10-14 22:17:50</p>
                        </div>
                      </li>
                      <el-divider></el-divider>
                      <li>
                        <div class="user_comment_left">
                          <el-avatar src="/images/books/touxiang1.png" :size="80"></el-avatar>
                          <span>花花</span>
                        </div>
                        <div class="user_comment_right">
                          <el-rate v-model="value1" disabled></el-rate>
                          <p>全书阅读完毕。感觉笔触细腻，感情真挚！淳朴！足不出户，可领阅名山大川雄伟壮丽景致，大江大湖之波澜壮阔美景！商业中人，有此雅量，大赞，此书值得一读</p>
                          <p>2022-10-14 22:17:50</p>
                        </div>
                      </li>
                      <el-divider></el-divider>
                      <li>
                        <div class="user_comment_left">
                          <el-avatar src="/images/books/touxiang2.png" :size="80"></el-avatar>
                          <span>贺贺</span>
                        </div>
                        <div class="user_comment_right">
                          <el-rate v-model="value1" disabled></el-rate>
                          <p>全书阅读完毕。感觉笔触细腻，感情真挚！淳朴！足不出户，可领阅名山大川雄伟壮丽景致，大江大湖之波澜壮阔美景！商业中人，有此雅量，大赞，此书值得一读</p>
                          <p>2022-10-14 22:17:50</p>
                        </div>
                      </li>
                      <el-divider></el-divider>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="好评（1）" name="second1" class="user_comment">
                    <ul>
                      <li>
                        <div class="user_comment_left">
                          <el-avatar src="/images/books/touxiang2.png" :size="80"></el-avatar>
                          <span>ygg</span>
                        </div>
                        <div class="user_comment_right">
                          <el-rate v-model="value1" disabled></el-rate>
                          <p>全书阅读完毕。感觉笔触细腻，感情真挚！淳朴！足不出户，可领阅名山大川雄伟壮丽景致，大江大湖之波澜壮阔美景！商业中人，有此雅量，大赞，此书值得一读</p>
                          <p>2022-10-14 22:17:50</p>
                        </div>
                      </li>
                      <el-divider></el-divider>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="中评（1）" name="third1" class="user_comment">
                    <ul>
                      <li>
                        <div class="user_comment_left">
                          <el-avatar src="/images/books/touxiang.png" :size="80"></el-avatar>
                          <span>小小小</span>
                        </div>
                        <div class="user_comment_right">
                          <el-rate v-model="value2" disabled></el-rate>
                          <p>全书阅读完毕。感觉笔触细腻，感情真挚！淳朴！足不出户，可领阅名山大川雄伟壮丽景致，大江大湖之波澜壮阔美景！商业中人，有此雅量，大赞，此书值得一读</p>
                          <p>2022-10-14 22:17:50</p>
                        </div>
                      </li>
                      <el-divider></el-divider>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="差评（1）" name="forth1" class="user_comment">
                    <ul>
                      <li>
                        <div class="user_comment_left">
                          <el-avatar src="/images/books/touxiang1.png" :size="80"></el-avatar>
                          <span>昊歌</span>
                        </div>
                        <div class="user_comment_right">
                          <el-rate v-model="value3" disabled></el-rate>
                          <p>全书阅读完毕。感觉笔触细腻，感情真挚！淳朴！足不出户，可领阅名山大川雄伟壮丽景致，大江大湖之波澜壮阔美景！商业中人，有此雅量，大赞，此书值得一读</p>
                          <p>2022-10-14 22:17:50</p>
                        </div>
                      </li>
                      <el-divider></el-divider>
                    </ul>
                  </el-tab-pane>
                </el-tabs>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import 'swiper/css/bundle' // 所有 Swiper 样式，包括所有模块样式（如导航、分页等）
import Swiper, { Navigation } from 'swiper' // 导入您需要的模块
import { Message } from 'element-ui'
export default {
  name: 'Detail',
  data() {
    return {
      num: 1,
      activeName: 'second',
      activeName1: 'first1',
      // 好评
      value1: 5,
      // 中评
      value2: 3,
      // 差评
      value3: 1
    }
  },

  methods: {
    // 商品放大镜功能
    loupe() {
      // 要被放大的图片容器
      let bigImg = this.$refs.bigImg
      // 遮盖层
      let cover = this.$refs.cover
      //未被放大的图片
      let orgin = this.$refs.orgin
      //获取要被放大的图片
      let orginImg = this.$refs.orginImg
      //容器
      let container = this.$refs.container
      let containerWidth = container.offsetWidth
      let containerHeight = container.offsetHeight
      let coverWidth = cover.offsetWidth
      let coverHeight = cover.offsetHeight
      //鼠标一移入就将遮盖层和要被放大的图片显示出来
      bigImg.style.display = 'block'
      cover.style.display = 'block'
      // 添加鼠标移动事件
      orgin.onmousemove = function (e) {
        e = e || window.event
        // pageY：鼠标在页面上的位置,从页面左上角开始,即是以页面为参考点,不随滑动条移动而变化；
        // clientY：鼠标在页面上可视区域的位置,从浏览器可视区域左上角开始,即是以浏览器滑动条此刻的滑动到的位置为参考点；
        // offsetY：IE特有,鼠标相比较于触发事件的元素的位置,以元素盒子模型的内容区域的左上角为参考点,如果有boder,可能出现负值。
        // 获取遮盖层需要偏移的距离
        let moveX = e.pageX - container.offsetLeft - coverWidth / 2
        let moveY = e.pageY - container.offsetTop - coverHeight / 2
        // 放大图片的偏移量
        let left = e.pageX - container.offsetLeft
        let top = e.pageY - container.offsetTop
        // 判断遮盖层的边界
        // 水平方向
        if (moveX < 0) {
          cover.style.left = 0 + 'px'
        } else if (moveX > containerWidth - coverWidth) {
          cover.style.left = containerWidth - coverWidth + 'px'
        } else {
          cover.style.left = moveX + 'px'
        }
        // 垂直方向
        if (moveY < 0) {
          cover.style.top = 0 + 'px'
        } else if (moveY > containerHeight - coverHeight) {
          cover.style.top = containerHeight - coverHeight + 'px'
        } else {
          cover.style.top = moveY + 'px'
        }
        // console.log(big.style)
        bigImg.style.backgroundImage = 'url(' + orginImg.src + ')'
        bigImg.style.backgroundPositionX = -left + 'px'
        bigImg.style.backgroundPositionY = -top + 'px'
      }
    },
    // 鼠标移出隐藏图片
    hidden() {
      this.$refs.bigImg.style.display = 'none'
      this.$refs.cover.style.display = 'none'
    },
    // 初始化swiper
    initSwiper() {
      new Swiper('.swiper', {
        slidesPerView: 5,
        spaceBetween: 10,
        // 允许拖动
        allowTouchMove: true,
        cssMode: true,
        // 循环
        loop: true,
        modules: [Navigation],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    },
    handleChange() {},
    handleClick() {},
    // 加入购物车
    addCart() {
      this.$message({ type: 'success', message: '加入购物车成功！' })
    },
    //替换放大镜里的图片
    changeImg(event) {
      this.$refs.orginImg.src = event.target.src
    }
  },
  mounted() {
    this.initSwiper()
  }
}
</script>

<style lang="less" scoped>
.detail {
  @import '/public/common.less';
  background-color: @bgColor;
  padding: 10px;
  .center_content {
    .wh(1200px;auto);
    margin: 10px auto;
  }
  .detail_content1 {
    margin: 20px 0;
    .flex();
    .detail_content1_left {
      .zoom {
        .container {
          position: relative;
          .wh(300px;400x);
          .orgin {
            .wh(300px;400px);
            .border();
            img {
              .wh(298px;398px);
            }
          }
          .bigImg {
            .wh(300px;400px);
            position: absolute;
            .tl(0,300px);
            background: no-repeat;
            .border();
            border-left: 0;
            background-size: 180%;
            display: none;
            background-color: #fff;
            z-index: 999;
          }
          .cover {
            .wh(200px;300px);
            position: absolute;
            .tl();
            background-color: #77e8b0;
            opacity: 0.5;
            display: none;
          }
        }
      }
      .imgList {
        .wh(300px;auto);
        --swiper-navigation-size: 30px;
        .swiper {
          .wh(300px;auto);
          .swiper-wrapper {
            align-items: center;
            .swiper-slide {
              .border(2px);
              img {
                display: inline-block;
                .wh(52px;60px);
                margin-bottom: -4px;
              }
            }
            .swiper-slide:hover {
              .border(2px;solid;#ff6600);
            }
            .swiper-slide:nth-of-type(1) {
              .border(2px;solid;#ff6600);
            }
            .swiper-button-next {
              display: none;
            }
          }
        }
      }
    }
    .detail_content1_right {
      .wh(800px,auto);
      > div {
        margin: 20px 0;
      }
      .book_name {
        font-size: 18px;
        font-weight: bold;
      }
      .book_desc {
        font-size: 14px;
      }
      .author,
      .publisher,
      .pub_date {
        font-size: 12px;
      }
      .price {
        font-size: 24px;
        color: #e52222;
      }
      .el-card {
        background-color: #fee9eb;
        .el-card__body {
          > div {
            margin: 20px 0;
          }
        }

        .comment {
          margin-left: 580px;
          font-size: 12px;
        }
        .limit_time {
          font-size: 12px;
        }
      }
      .address {
        font-size: 14px;
      }
      .add_cart,
      .purchase {
        display: inline-block;
        .wh(100px;auto);
        margin: 0 10px;
      }
      .add_cart {
        button {
          background-color: #ff2832;
          color: #fff;
        }
        button:hover {
          background-color: #f00000;
        }
      }
      .purchase {
        button {
          .border(1px;solid;#e52222);
          color: #e52222;
          background-color: #ffedee;
        }
        button:hover {
          background-color: #ffd7d7;
        }
      }
    }
  }
  .detail_content2 {
    .detail_content2_left {
      .goods_comment {
        position: relative;
        .goods_comment_left {
          .well_received {
            position: absolute;
            .tl(72px,52px);
            font-size: 12px;
          }
        }
        .goods_comment_right {
          > div {
            p {
              margin: 20px 0;
              a {
                .el-tag {
                  color: #000;
                }
              }
              a:hover {
                .el-tag {
                  background-color: #f00;
                  color: #fff;
                }
              }
            }
          }
        }
        .el-progress__text {
          font-size: 24px !important;
        }
        .user_comment {
          .user_comment_left {
            margin-right: 30px;

            > span {
              display: block;
              text-align: center;
            }
          }
          .user_comment_right {
            > p {
              margin: 10px 0;
            }
          }
          ul {
            li {
              .flex();
            }
          }
        }
      }
    }
  }
}
</style>
