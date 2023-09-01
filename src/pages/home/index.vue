<template>
    <div>
        <!-- 首页展示轮播图 -->
        <Carousel />
        <!-- 首页输入框 -->
        <Search />
        <!-- 底部展示医院结构 -->
        <el-row :gutter="50">
            <el-col :span="18">
                <!-- 展示医院等级 -->
                <Level/>
                <!-- 展示医院地区 -->
                <Region/>
                <!-- 展示医院卡片 -->
                <div class="cards">
                    <Card v-for="item in 10" :key="item" class="card"/>
                </div>
                <!-- 展示分页 -->
                <Pagination/>
            </el-col>
            <el-col :span="6">
                <!-- 展示右侧公告信息 -->
                <Tip/>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
// 引入轮播图组件
import Carousel from './carousel/index.vue';
// 引入首页搜索组件
// @ts-ignore
import Search from './search/index.vue'
// 展示首页医院等级组件
import Level from './level/index.vue'
// 引入首页医院地区组件
import Region from './region/index.vue'
// 引入首页医院卡片组件
import Card from './card/index.vue'
// 引入首页右侧提示公告组件
// @ts-ignore
import Tip from './tip/index.vue'
// 引入首页分页插件
import Pagination from './pagination/index.vue'
</script>


<style scoped lang="scss">
.cards{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    .card{
        width: 48%;
        margin-right: 15px;
        margin-top: 10px;
    }
}
</style>