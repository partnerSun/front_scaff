<script  setup>
import { reactive,ref,toRefs } from 'vue';
import {addUserHandler} from '../../api/user.js';
import { ElMessage } from 'element-plus';

const data = reactive({
    userForm:{
        username: '',
        qq: '',
        address: '',
    },

})
// 转换为普通对象 给template使用
const {userForm} = toRefs(data)
//此变量用于绑定form表单的属性
const userFormRef=ref()
//重置输入框
const resetForm = () => {
//   if (!userFormRef) return
  userFormRef.value.resetFields()
}

const rules = reactive({
    // 和prop标签对应
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
     ],
    qq: [
      { required: true, message: '请输入qq号码', trigger: 'blur' },
      // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ]
  })

const loading =ref(false)
// 添加用户
const submit = () =>{
    //通过validate函数判断表单是否符合input中的规则
    userFormRef.value.validate((valid)=>{
         //如果valid为true 代表表单校验成功
        if (valid) {
        loading.value=true
        addUserHandler(data.userForm)
        .then((response)=>{
            ElMessage({
             message: response.data.message,
             type: 'success',
            })
            loading.value=false
            // console.log("刷新状态-添加用户-后",loading.value)
        })
      } else {
        ElMessage({
            message: "输入信息不完整",
            type: 'error',
        })
      }
    })
}
</script>

<template>
    <el-form 
    :model="userForm" 
    el-form--label-left
    ref="userFormRef" 
    v-loading="loading"
    :rules="rules"
    >
    <el-form-item class="form-item" prop="username" label="姓名" label-width="64px">
        <el-input v-model="userForm.username" autocomplete="off"/>
    </el-form-item>

    <el-form-item class="form-item" prop="qq" label="QQ" label-width="64px">
        <el-input v-model="userForm.qq" autocomplete="off"/>
    </el-form-item>

    <el-form-item class="form-item" prop="address" label="地址" label-width="64px">
        <el-input v-model="userForm.address" autocomplete="off"/>
    </el-form-item>

    </el-form>
    <span>
        <el-button @click="resetForm()">重置</el-button>

        <el-button type="primary" @click="submit()">提交</el-button>

    </span>
</template>

<style>
.form-item{
    width: 300px;
    margin: 20px auto;
}
</style>