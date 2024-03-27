<script  setup>
import {getUserList} from '../../api/user.js';
import { ElMessage } from 'element-plus';
import {reactive,toRefs} from 'vue'

const userList = reactive({
  data: ""
})
//获取用户列表
const getUser = () =>{
  getUserList()
    .then((response) => {
      // console.log("获取成功，response:",response)
      // response.status http请求的状态,axios自动返回的
      // response.data.status 后端返回的状态，需要后端提供data.status
      if ( response.data.status == 200 ){
        // 获取成功提示
        ElMessage({
          message: response.data.message,
          type: 'success',
       })
      // const userList = [response.data.data.items][0]
      userList.data = response.data.data.items
      console.log("用户信息",userList)
      }
    })
     //.catch错误在守卫中处理
  
  }
  const {userList2} = toRefs(userList.data)
</script>

<template>


  <el-card >
    <template #header>
      <div class="card-header">
        <span>用户列表</span>
        <el-button text bg @click="getUser()">获取用户列表</el-button>
      </div>
    </template>

      <el-table :data="userList2" style="width: 100%">
        <!-- <el-table v-for="(userinfo) in userList" :key="userinfo.id" :data="userinfo" style="width: 100%">  -->
        <el-table-column prop="id" label="Id" width="180" />
        <el-table-column prop="username" label="Name" width="180" />
        <el-table-column prop="qq" label="QQ" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
  </el-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>