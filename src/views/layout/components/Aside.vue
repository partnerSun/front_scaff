<script  setup>
  import { GoldMedal ,Document,Menu as IconMenu,Location, Setting, } from '@element-plus/icons-vue'
  import {MENU_CONFIG} from '../../../config/menu.js'
  const handleOpen = (key, keyPath) => {
        console.log("打开:",key, keyPath)
    }
  const handleClose = (key, keyPath) => {
         console.log("关闭:",key, keyPath)
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
        default-active="/user/list" 
        class="el-menu-vertical-demo"
        router
        @open="handleOpen"
        @close="handleClose"
        >
        <el-sub-menu v-for="(menu) in MENU_CONFIG" :key="menu.index" :index="menu.index">
            <template #title>  
                <span>{{ menu.title }}</span>
            </template>
            <!-- 判断是否有子菜单 -->
            <!-- if-else放在template中，否则需要多加一层el-sub-menu和el-menu-item -->
            <template v-if="menu.subMenu">
                <el-sub-menu v-for="(submenu) in menu.subMenu" :key="submenu.index" :index="submenu.index">
                    <template #title>
                        <span> {{ submenu.title }} </span>
                    </template>
                    <el-menu-item v-for="(subitem) in submenu.items" :key="subitem.index" :index="subitem.index">
                    {{ subitem.title }}
                    </el-menu-item>
                </el-sub-menu>
            </template>

            <template v-else>
                <el-menu-item v-for="(item) in menu.items" :key="item.index" :index="item.index">
                 {{ item.title }}
                </el-menu-item>
            </template>

        </el-sub-menu>



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