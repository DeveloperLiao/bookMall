<template>
  <div>
    <div class="float-ball">
      <a class="iconfont icon-musicfill audio-colse" title="关闭音频" v-show="false" @click="aduioPause"></a>
      <a class="iconfont icon-musicforbidfill audio-show" title="播放音频" v-show="true" @click="aduioPlay"></a>
    </div>
    <!-- 音频播放 -->
    <div class="audio-box">
      <div class="audio-container">
        <div class="audio-cover"></div>
        <div class="audio-view">
          <h3 class="audio-title">未知歌曲</h3>
          <div class="audio-body">
            <div class="audio-backs">
              <div class="audio-this-time">00:00</div>
              <div class="audio-count-time">00:00</div>
              <div class="audio-setbacks">
                <i class="audio-this-setbacks">
                  <span class="audio-backs-btn"></span>
                </i>
                <span class="audio-cache-setbacks"> </span>
              </div>
            </div>
          </div>
          <div class="audio-btn">
            <div class="audio-select">
              <div class="audio-prev"></div>
              <div class="audio-play"></div>
              <div class="audio-next"></div>
              <div class="audio-menu"></div>
              <div class="audio-volume"></div>
            </div>
            <div class="audio-set-volume">
              <div class="volume-box">
                <i><span></span></i>
              </div>
            </div>
            <div class="audio-list">
              <div class="audio-list-head">
                <p>☺随心听</p>
                <span class="menu-close">关闭</span>
              </div>
              <ul class="audio-inline"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '/public/js/audio.js'
export default {
  name: 'Aduio',
  data() {
    return {
      aduioStatus: false
    }
  },
  mounted() {
    $(function () {
      //    音频数据
      var song = [
        {
          id: 1,
          cover: '/images/aduio/weiyi.png',
          src: '/music/moon_1.mp3',
          title: '《月亮与六便士》第1集 伟大的艺术家'
        },
        {
          id: 2,
          cover: '/images/aduio/weiyi.png',
          src: '/music/moon_2.mp3',
          title: '《月亮与六便士》第2集 初入伦敦文学界'
        },
        {
          id: 3,
          cover: '/images/aduio/weiyi.png',
          src: '/music/moon_3.mp3',
          title: '《月亮与六便士》第3集 神秘的先生'
        },
        {
          id: 4,
          cover: '/images/aduio/weiyi.png',
          src: '/music/moon_4.mp3',
          title: '《月亮与六便士》第4集 安逸祥和的幸福'
        },
        {
          id: 5,
          cover: '/images/aduio/weiyi.png',
          src: '/music/moon_5.mp3',
          title: '《月亮与六便士》第5集 一个便士也没有得到'
        }
      ]
      // 初始化
      audioPlay({
        song: song,
        autoPlay: false //是否立即播放第一首，autoPlay为true且song为空，会alert文本提示并退出
      })
    })
    this.aduioStatus = window.aduioStatus
  },
  methods: {
    aduioPause() {},
    // 点击播放按钮
    aduioPlay() {
      let res = this.$router.options.routes.every(item => {
        item.meta.floatBall == true
      })
      // 点击播放后悬浮球在每个页面中都显示
      if (!res) {
        this.$router.options.routes.forEach(item => {
          item.meta.floatBall = true
        })
      }
    }
  }
}
</script>

<style>
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Microsoft YaHei', 'Lantinghei SC', 'Open Sans', Arial, 'Hiragino Sans GB', 'STHeiti', 'WenQuanYi Micro Hei', 'SimSun', sans-serif;
}
ul li {
  list-style-type: none;
}
.float-ball {
  width: 50px;
  height: 50px;
  background-color: #4662d9;
  line-height: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #ccc;
  text-align: center;
  position: fixed;
  top: 100px;
  right: 100px;
  z-index: 999;
}
.float-ball > a {
  font-size: 24px;
  color: #46b448;
}
.audio-box {
  position: fixed;
  width: 100%;
  min-width: 338px;
  height: auto;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  z-index: 999;
}
.audio-container {
  width: 100%;
  margin: auto;
}
.audio-view {
  float: right;
  width: calc(100% - 66px);
  height: 66px;
}
.audio-cover {
  float: left;
  margin: 5px;
  width: 56px;
  height: 56px;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #000;
  border-radius: 50%;
  -webkit-animation: rotating 9s linear infinite;
  animation: rotating 9s linear infinite;
  animation-play-state: paused;
}
.roate-animation-paused {
  /* 该属性一旦被添加,CSS动画会立即暂停,并且保持于当前帧 */
  animation-play-state: paused;
}
.roate-animation-running {
  /* 该属性一旦被添加,CSS动画会立即从当前帧开始运作; */
  animation-play-state: running;
}
.audio-cover img {
  display: block;
  height: 100%;
  margin: auto;
}
.audio-body {
  float: left;
  width: calc(100% - 168px);
  height: 38px;
  padding: 0 10px;
}
.audio-title {
  width: 100%;
  height: 28px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 15px;
  line-height: 38px;
  overflow: hidden;
  letter-spacing: 1.8px;
}
.audio-backs {
  position: relative;
  padding-left: 43px;
  padding-right: 43px;
  margin-top: 10px;
  height: 20px;
}
.audio-this-time,
.audio-count-time {
  position: absolute;
  top: 0;
  width: 38px;
  font-size: 13px;
  height: 22px;
  line-height: 22px;
  letter-spacing: 0.5px;
}
.audio-this-time {
  left: 0;
}
.audio-count-time {
  right: 0;
  text-align: right;
}
.audio-setbacks {
  height: 2px;
  border-radius: 3px;
  background-color: #333;
}
.audio-setbacks {
  position: relative;
  top: 50%;
}
.audio-cache-setbacks,
.audio-this-setbacks {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
}
.audio-cache-setbacks {
  background-color: #535353;
  z-index: 1;
  cursor: pointer;
}
.audio-this-setbacks {
  background-color: rgba(71, 163, 218, 0.88);
  z-index: 2;
}
.audio-backs-btn {
  position: absolute;
  width: 8px;
  height: 8px;
  margin-top: -4px;
  top: 50%;
  right: -4px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
}
.audio-btn {
  float: right;
  width: 148px;
  height: 38px;
}
.audio-select {
  margin-top: 12px;
}
.audio-select > div {
  margin-left: 14px;
  width: 16px;
  height: 16px;
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  float: left;
  cursor: pointer;
}
.audio-prev {
  background-image: url('../../../public/images/aduio/prev.png');
}
.audio-next {
  background-image: url('../../../public/images/aduio/next.png');
}
.audio-play {
  background-image: url('../../../public/images/aduio/play.png');
}
.audio-stop {
  background-image: url('../../../public/images/aduio/pause.png');
}
.audio-menu {
  background-image: url('../../../public/images/aduio/menu.png');
}
.audio-volume {
  background-image: url('../../../public/images/aduio/volume.png');
}
.audio-select > div + div {
  margin-left: 10px;
}
.audio-list {
  position: absolute;
  right: 0;
  color: #000;
  background-color: #fff;
  bottom: 66px;
  border: 1px solid #ccc;
  width: 188px;
  border-radius: 5px 5px 0 0;
  padding-top: 10px;
  letter-spacing: 0.5px;
  display: none;
}
.audio-list-head {
  position: relative;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.audio-list-head p {
  padding-left: 8px;
  font-size: 16px;
  color: #47a3da;
}
.audio-list-head span {
  position: absolute;
  right: 6px;
  top: 0;
  font-size: 12px;
  display: block;
  width: 35px;
  line-height: 20px;
  border: 1px solid #eee;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  color: #f10b0b;
}
.audio-inline {
  height: 152px;
  overflow-y: scroll;
}
/*audio-inline滚动条样式开始*/
.audio-inline::-webkit-scrollbar {
  width: 3px;
  height: 0px;
  border-radius: 6px;
}
.audio-inline::-webkit-scrollbar-button {
  display: none;
}
.audio-inline::-webkit-scrollbar-track-piece {
  display: none;
}
.audio-inline::-webkit-scrollbar-thumb {
  background: #47a3da;
  border-radius: 20px;
}
.audio-inline::-webkit-scrollbar-thumb:hover {
  background: #45b6f7;
  border-radius: 6px;
}
/*audio-inline滚动条样式结束*/
.audio-inline li {
  font-size: 12px;
  line-height: 2.6;
  padding-left: 8px;
  padding-right: 8px;
  border-top: 1px solid #ccc;
}
.audio-inline li:first-child {
  border-top: 0px solid #ccc;
}
.audio-inline a {
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  height: 30px;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #888;
}
.menu-show,
.audio-show-volume {
  display: block !important;
}
.audio-set-volume {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 66px;
  width: 26px;
  height: 118px;
  right: 0px;
  z-index: 999;
  display: none;
}
.volume-box {
  width: 2px;
  margin: auto;
  display: block;
  position: relative;
  background-color: #333;
  border-radius: 2.5px;
  height: 100px;
  bottom: -10px;
}
.volume-box span {
  display: block;
  width: 8px;
  height: 8px;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  margin-left: -4px;
  margin-top: -4px;
  left: 50%;
  cursor: pointer;
}
.volume-box i {
  position: absolute;
  width: 100%;
  border-radius: 2.5px;
  background-color: #47a3da;
  height: 0;
  display: block;
  bottom: 0;
}
@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
