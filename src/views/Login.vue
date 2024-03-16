<script  setup>
  import { reactive, ref, watch } from 'vue';
  import { User, Lock } from '@element-plus/icons-vue'


  const loginInfo = reactive({
    pass: '',
    username: '',
  })
  const LoginRef = ref("")
  const rules = reactive({
    // 和prop标签对应
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
     ],
    pass: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ]
  })


  let loginState = ref(true)
  //监听用户名和密码的变化
  watch([()=>loginInfo.username,()=>loginInfo.pass], () => {
    //LoginRef和表单绑定
    //通过validate函数判断表单是否符合input中的规则
    LoginRef.value.validate((valid)=>{
      //如果valid为true 代表表单校验成功
      if (valid) {
        loginState.value = false
      } else {
        loginState.value = true
      }
    })
  })


</script>

<template>
    <el-card style="width: 300px;">
      <h2>后台管理系统</h2>
      <el-form
      :model="loginInfo"
      status-icon
      :rules="rules"
      ref="LoginRef"
     >
    <el-form-item prop="username">
      <el-input :prefix-icon="User" v-model="loginInfo.username" placeholder="请输入用户名" clearable/>
    </el-form-item>

    <el-form-item prop="pass">
      <el-input :prefix-icon="Lock" show-password v-model="loginInfo.pass" type="password" autocomplete="off" placeholder="请输入密码" clearable />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="disLogin()" style="display: flex; place-items: center;" :disabled="loginState">
        登录
      </el-button>
    </el-form-item>

  </el-form>
  </el-card>

</template>

<style scoped>

</style>