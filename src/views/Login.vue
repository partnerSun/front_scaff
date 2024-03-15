<script  setup>
  import { reactive, ref } from 'vue';
  import { User, Lock } from '@element-plus/icons-vue'
  const loginInfo = reactive({
    pass: '',
    username: '',
})
</script>

<template>
    <el-card style="width: 300px;">
      <h2>后台管理系统</h2>
      <el-form
      :model="loginInfo"
      status-icon
      :rules="rules"
     >
    <el-form-item prop="username">
      <el-input :prefix-icon="User" v-model="loginInfo.username" placeholder="请输入用户名" clearable/>
    </el-form-item>

    <el-form-item prop="pass">
      <el-input :prefix-icon="Lock" show-password v-model="loginInfo.pass" type="password" autocomplete="off" placeholder="请输入密码" clearable />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)" style="display: flex; place-items: center;">
        登录
      </el-button>
    </el-form-item>

  </el-form>
  </el-card>

</template>

<style scoped>

</style>