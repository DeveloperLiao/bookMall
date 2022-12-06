<template>
  <div class="bgc">
    <div class="content_center">
      <!-- 面包屑 -->
      <div class="bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ classifyname }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ sortname }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 书籍分类栏 -->
      <div class="category">
        <el-card class="box-card">
          <!-- 分类 -->
          <div class="classification">
            <span>分类</span>
            <!-- 分类项 -->
            <ul class="clearfix classifylist">
              <li class="" v-for="item in list">
                <a href="#">{{ item.classifyname }}</a>
              </li>
            </ul>
          </div>
          <!-- 类别 -->
          <div class="sort">
            <span>类别</span>
            <ul class="clearfix sortlist">
              <li class="" v-for="item in list[index].children">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
      <!-- 排序 -->
      <div class="order">
        <el-radio v-model="radio" label="1">综合排序</el-radio>
        <el-radio v-model="radio" label="2">价格升序</el-radio>
        <el-radio v-model="radio" label="3">价格降序</el-radio>
      </div>
      <!-- 书籍展示栏 -->
      <div class="display">
        <div class="floor_cards">
          <ul class="clearfix">
            <li v-for="item in sortList" :key="item.id">
              <router-link to="/detail"
                ><img :src="item.imgUrl" alt="!" /><span
                  >{{ item.name }}<i>￥{{ item.price }}</i></span
                ><span class="floor_mask"><button>查看详细</button></span></router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- 分页 -->
      <div class="paging">
        <el-pagination background layout="prev, pager, next" :total="100" style="text-align: center; margin: 10px 0"> </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue'
import { mapState } from 'vuex'
export default {
  name: 'Sort',
  data() {
    return {
      // 1综合排序，2价格升序，3价格降序
      radio: '1',
      // 分类项名称
      classifyname: '言情',
      //类别名称
      sortname: '重生文',
      //分类项名称
      list: [
        {
          classifyname: '言情',
          children: ['重生', '穿越', '反穿越', '科幻', '宅斗', '宫斗', '玄幻', '公路']
        },
        {
          classifyname: '文艺',
          children: ['诗歌', '散文', '小说', '戏剧文学', '表演艺术', '音乐', '绘画', '书法']
        },
        {
          classifyname: '武侠',
          children: ['传统', '浪子', '历史', '谐趣']
        },
        {
          classifyname: '科技',
          children: ['自然科学', '数理科学', '天文', '生物科学', '农业']
        },
        {
          classifyname: '心理',
          children: ['心灵', '原理', '形象']
        },
        {
          classifyname: '童书',
          children: ['诗歌童谣', '寓言故事', '儿童文学']
        },
        {
          classifyname: '生活',
          children: ['思想', '工具', '消遣']
        },
        {
          classifyname: '经营',
          children: ['创业', '经商']
        },
        {
          classifyname: '期刊',
          children: ['学报', '通报', '汇刊']
        },
        {
          classifyname: '其他',
          children: ['电子书']
        }
      ],
      //列表项数组的索引
      index: 0
    }
  },
  mounted() {
    this.selectItem(),
      // 派发获取展示列表数据的action
      this.$store.dispatch('getSortList', this.$api)
  },
  methods: {
    // 为选中的分类项添加选中效果
    selectItem() {
      let classifylist = $('.classifylist')
      let sortlist = $('.sortlist')
      // 初始化分类列表的样式
      classifylist.children().eq(0).addClass('underline')
      sortlist.children().eq(0).addClass('round')
      let that = this
      classifylist.children().on('click', function () {
        // 重置类别项的样式
        sortlist.children().removeClass('round')
        sortlist.children().eq(0).addClass('round')
        //重置面包屑
        that.sortname = that.list[$(this).index()].children[0]
        // 清除全部分类项的样式
        classifylist.children().removeClass('underline')
        // 给当前选中的分类项添加样式
        $(this).addClass('underline')
        // 面包屑
        that.classifyname = $(this)[0].innerText
        //选中列表项的索引
        that.index = $(this).index()
      })
      // 回调函数延迟到下一个DOM更新后执行
      that.$nextTick(() => {
        sortlist.children().on('click', function () {
          sortlist.children().removeClass('round')
          $(this).addClass('round')
          // 面包屑
          that.sortname = $(this)[0].innerText
        })
      })
    }
  },
  computed: mapState({
    sortList: state => state.sort.sortList
  }),
  watch: {
    radio(newVal, oldVal) {
      let arr = []
      let sortList = this.sortList
      let length = sortList.length
      if (newVal == 1) {
        for (let i = 0; i < length - 1; i++) {
          for (let j = 0; j < length - 1 - i; j++) {
            if (sortList[j].id > sortList[j + 1].id) {
              let temp = sortList[j]
              sortList[j] = sortList[j + 1]
              sortList[j + 1] = temp
            }
          }
        }
      } else if (newVal == 2) {
        // 升序
        for (let i = 0; i < length - 1; i++) {
          for (let j = 0; j < length - 1 - i; j++) {
            if (sortList[j].price > sortList[j + 1].price) {
              let temp = sortList[j]
              sortList[j] = sortList[j + 1]
              sortList[j + 1] = temp
            }
          }
        }
      } else if (newVal == 3) {
        // 降序
        for (let i = 0; i < length - 1; i++) {
          for (let j = 0; j < length - 1 - i; j++) {
            if (sortList[j].price < sortList[j + 1].price) {
              let temp = sortList[j]
              sortList[j] = sortList[j + 1]
              sortList[j + 1] = temp
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bgc {
  @import (less) '/public/common.less';
  background-color: @bgColor;
  .content_center {
    .wh(1400px;auto);
    margin: 0 auto;
    .bread {
      padding: 20px 0;
    }
    .category {
      margin: 20px 0;
      .classification,
      .sort {
        .flex(flex;center,center);
        margin: 20px 0;
        > span {
          font-size: 18px;
        }
        ul {
          li {
            position: relative;
            float: left;
            font-size: 18px;
            margin: 0 15px;
            padding: 5px;
          }
        }
      }
      .classification {
        > ul {
          li {
            &:hover {
              ::after {
                content: '';
                display: block;
                position: absolute;
                .tl(30px;3px);
                .wh(40px;4px);
                background-image: linear-gradient(to right, #da1f38, #ec745f);
              }
            }
          }
        }
      }
      .sort {
        ul li {
          &:hover {
            background-color: #d70e30;
            border-radius: 20%;
            > a {
              color: #fff;
            }
          }
        }
      }
    }
    .order {
      margin: 10px 0;
    }
    .display {
      .floor_cards {
        .wh(1400px;auto);
        margin: 50px auto 0;
        ul li {
          float: left;
          margin: 0px 40px;
          border-radius: 10px;
          margin-bottom: 30px;

          > a {
            position: relative;
            .flex(flex;center,center);
            flex-direction: column;
            box-shadow: 0 0 10px #ddd;
            border-radius: 10px;
            .floor_mask {
              position: absolute;
              display: inline-block;
              .wh(150px;180px);
              .tl(0;0);
              background-color: rgba(0, 0, 0, 0.2);
              z-index: 999;
              border-radius: 10px 10px 0 0;
              display: none;
              text-align: center;
              line-height: 180px;
              button {
                .wh(100px;30px);
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
              .wh(150px;30px);
              line-height: 30px;
              text-align: center;
              border-radius: 0 0 10px 10px;
              > i {
                color: #d70e30;
              }
            }
            img {
              .wh(150px;180px);
              border-radius: 10px 10px 0 0;
            }
          }
          > a {
            &:hover {
              .floor_mask {
                display: block;
              }
            }
          }
        }
      }
    }
  }
  .underline::after {
    content: '';
    display: block;
    position: absolute;
    .tl(30px;3px);
    .wh(40px;4px);
    background-image: linear-gradient(to right, #da1f38, #ec745f);
  }
  .round {
    background-color: #d70e30;
    border-radius: 20%;
  }
  .round > a {
    color: #fff;
  }
}
</style>
