<template>
  <div>
    <div class="bgc">
      <div class="form">
        <h2 style="text-align: center; padding: 30px 0; padding-left: 90px">欢迎注册尚书汇！</h2>
        <el-form :model="ruleForm" status-icon ref="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input type="text" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="checkPsd">
            <el-input type="password" v-model="ruleForm.checkPsd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width: 300px">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  components: {},
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
    }
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('姓名不能为空'))
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        name: '',
        password: '',
        checkPsd: ''
      },
      rules: {
        username: [{ validator: checkUsername, trigger: 'blur' }],
        name: [{ validator: checkName, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        checkPsd: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
