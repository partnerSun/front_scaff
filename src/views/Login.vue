<script lang="js" setup>
    import { ref } from 'vue'

</script>

<template>
    <el-card style="max-width: 400px">
        <h2>后台管理系统</h2>
        <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item label="" prop="pass">
      <el-input 
        v-model="ruleForm.pass" type="password" autocomplete="off" 
      />
    </el-form-item>
    
    <el-form-item label="Confirm" prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >

    </el-form-item>
  </el-form>
    </el-card>

</template>

<style scoped>

</style>