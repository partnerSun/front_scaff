<script  setup>
  import { GoldMedal ,Document,Menu as IconMenu,Location, Setting, } from '@element-plus/icons-vue'
  const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
    }
  const handleClose = (key, keyPath) => {
         console.log(key, keyPath)
    }   
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
     <div>
     <el-row class="tac">
       <el-col >
       <el-menu
           default-active="2"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
        >
           <el-sub-menu index="1">
           <template #title>
               <el-icon><location /></el-icon>
               <span>Navigator One</span>
           </template>
           <el-menu-item-group title="Group One">
               <el-menu-item index="1-1">item one</el-menu-item>
               <el-menu-item index="1-2">item two</el-menu-item>
           </el-menu-item-group>
           <el-menu-item-group title="Group Two">
               <el-menu-item index="1-3">item three</el-menu-item>
           </el-menu-item-group>
           <el-sub-menu index="1-4">
               <template #title>item four</template>
               <el-menu-item index="1-4-1">item one</el-menu-item>
           </el-sub-menu>
           </el-sub-menu>
           <el-menu-item index="2">
           <el-icon><icon-menu /></el-icon>
           <span>Navigator Two</span>
           </el-menu-item>
           <el-menu-item index="3" disabled>
           <el-icon><document /></el-icon>
           <span>Navigator Three</span>
           </el-menu-item>
           <el-menu-item index="4">
           <el-icon><setting /></el-icon>
           <span>Navigator Four</span>
           </el-menu-item>
       </el-menu>
       </el-col>
      </el-row>
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