<template>
    <div class="hospital">
        <div class="top">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"><el-icon><HomeFilled /></el-icon></el-breadcrumb-item>
                <el-breadcrumb-item>医院信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        
        <div class="menu">
            <el-menu default-active="1" class="el-menu-vertical-demo">
                <el-menu-item index="1" @click="changeRouter('/hospital/register')">
                    <el-icon><icon-menu /></el-icon>
                    <span>预约挂号</span>
                </el-menu-item>
                <el-menu-item index="2" @click="changeRouter('/hospital/detail')">
                    <el-icon><More /></el-icon>
                    <span>医院详情</span>
                </el-menu-item>
                <el-menu-item index="3" @click="changeRouter('/hospital/notice')">
                    <el-icon>
                        <Tickets />
                    </el-icon>
                    <span>预约须知</span>
                </el-menu-item>
                <el-menu-item index="4" @click="changeRouter('/hospital/close')">
                    <el-icon>
                        <Message />
                    </el-icon>
                    <span>停诊信息</span>
                </el-menu-item>
                <el-menu-item index="5" @click="changeRouter('/hospital/search')">
                    <el-icon>
                        <Search />
                    </el-icon>
                    <span>查询/取消</span>
                </el-menu-item>
                
            </el-menu>
        </div>
        <div class="content">
            <router-view></router-view> 
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Tickets,
    Menu as IconMenu,
    Search,
    Message,
    More,
    HomeFilled
} from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
let $router = useRouter();

const changeRouter = (path:string) => {
  $router.push({ path: path});
};



</script>

<style scoped lang="scss">
.hospital {
    display: flex;
    flex-wrap: wrap;
    .top{
        color: #7f7f7f;
        width: 100%;
        margin-left: 25px;
    }
    .menu {
        flex: 2;
    }

    .content {
        flex: 8;
       
    }
}
</style>