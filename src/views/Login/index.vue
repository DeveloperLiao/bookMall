<template>
  <div>
    <div class="bgc">
      <div class="form">
        <h2 style="text-align: center; padding: 30px 0; padding-left: 90px">欢迎登录尚书汇！</h2>
        <el-form :model="ruleForm" status-icon ref="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model.number="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width: 300px">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { useAttrs } from 'vue'
export default {
  name: 'Login',
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空！'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { username, password } = this.ruleForm
          if (username === '廖符静' && password === 2019106200219) {
            localStorage.setItem('token', username)
            this.$store.dispatch('addToken', username)
            this.$message({ type: 'success', message: username + '，欢迎您！' })
            this.$router.push('/')
          } else {
            this.$message({ type: 'error', message: '账号或者密码错误' })
          }
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
// 引入公共样式
.bgc {
  @import (less) '/public/common.less';
  background: url(@bgurl) no-repeat;
  .wh(100%,975px);
  .flex(flex;center;center);
  .form {
    .wh(400px;auto);
    margin-left: -100px;
  }
}
</style>
