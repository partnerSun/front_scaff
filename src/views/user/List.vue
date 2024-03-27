<script  setup>
import {getUserList} from '../../api/user.js';
import { ElMessage } from 'element-plus';
import {reactive,toRefs,onBeforeMount,ref,watch } from 'vue'

const loading = ref(true)
const userList = reactive({
  items: [],
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
        userList.items = response.data.data.items
        // console.log("用户信息",userList)
        //当拿到数据后，停止刷新的动作
        loading.value=false
      }

    })
     //.catch错误在守卫中处理
  
  }

  const {items} = toRefs(userList)
  // 使用生命周期，在打开页面时自动加载数据
  onBeforeMount(() => {
    getUser()
  })



</script>

<template>


  <el-card >
    <template #header>
      <div class="card-header">
        <span>用户列表</span>
        <el-button text bg @click="getUser()">添加用户</el-button>
      </div>
    </template>

      <el-table v-loading="loading" 
      :data="items" 
      border 
      style="width: 100%" 
      height="450"
      :default-sort="{ prop: 'id', order: 'inscending' }"
      >
        <!-- <el-table v-for="(userinfo) in userList" :key="userinfo.id" :data="userinfo" style="width: 100%">  -->
        <el-table-column prop="id" label="Id" sortable  width="180" />
        <el-table-column prop="username" label="Name" width="180" />
        <el-table-column prop="qq" label="QQ" width="180" />
        <el-table-column prop="address" label="Address" />
        <el-table-column fixed="right" label="Operations">
          <template #default>
            <el-button link type="primary" size="small">编辑</el-button>
            <el-button link type="primary" size="small">删除</el-button>
          </template>
        </el-table-column>
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