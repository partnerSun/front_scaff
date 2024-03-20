<script  setup>
  import { GoldMedal } from '@element-plus/icons-vue'
</script>

<template>
    <el-aside class="el-aside">
     <div class="aside-div">
        <router-link to="/">
          <el-button text style="font-size: 20px;">
            <el-icon style="margin-right: 5px;"><GoldMedal /></el-icon>
             Logo信息 
          </el-button>
        </router-link>
     </div>
    </el-aside>
</template>


<style lang="less" scoped>

.el-aside{
    width:"200px";
    border-right: 1px solid #ccc;
    /* background-color: rgb(248, 247, 246); */
    /* border-right: 0cap; */
    .aside-div{
    height: 50px;
    button {
        height: 100%;
        width: 100%;
    }
}

}

</style>