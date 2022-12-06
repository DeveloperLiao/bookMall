<template>
  <div style="display: inline-block">
    <el-button type="text" @click="dialogVisible = true" class="el-icon-video-play" title="播放介绍视频"></el-button>
    <el-dialog title="时间简史介绍" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" style="display: none">
      <!-- 视频控件 -->
      <video controls width="500">
        <source src="/video/moon.mp4" type="video/mp4" />
        <source src="/video/moon.mp4" type="video/ogg" />
        您的浏览器不支持 video 标签。
      </video>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      let video = document.getElementsByTagName('video')[0]
      setTimeout(() => {
        // 重置视频的播放
        video.load()
      }, 250)
      done()
    }
  }
}
</script>

<style></style>
