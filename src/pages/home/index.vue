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
        <Level :names="hasLevelArr"/>
        <!-- 展示医院地区 -->
        <Region :names="hasRegionArr"/>
        <!-- 展示医院卡片 -->
        <div class="cards">
          <Card v-for="item in hasHospitalArr" :key="item.name" class="card" :hospital-info="item"/>
        </div>
        <!-- 展示分页 -->
        <Pagination :total="total" @getHospitalInfo="getHospitalInfo"/>
      </el-col>
      <el-col :span="6">
        <!-- 展示右侧公告信息 -->
        <Tip />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 引入轮播图组件
import Carousel from "./carousel/index.vue";
// 引入首页搜索组件
// @ts-ignore
import Search from "./search/index.vue";
// 展示首页医院等级组件
import Level from "./level/index.vue";
// 引入首页医院地区组件
import Region from "./region/index.vue";
// 引入首页医院卡片组件
import Card from "./card/index.vue";
// 引入首页右侧提示公告组件
import Tip from "./tip/index.vue";
// 引入首页分页插件
import Pagination from "./pagination/index.vue";
// 引入请求医院数据方法
import {reqHospital,reqRegion,reqLevel} from '@/api/home'
import { ref,onMounted} from "vue";
import {Content,StringArr} from '@/api/home/type'

// 分页请求医院数据
let hasHospitalArr = ref<Content>()
// 总个数
let total = ref<number>(0)
// 地区类别
let hasRegionArr = ref<StringArr>([])
// 等级类别
let hasLevelArr = ref<StringArr>([])

onMounted(()=>{
  getLevel()
  getRegion()
})

const getHospitalInfo = async(page:number,limit:number)=>{
  let result = await reqHospital(page,limit)
  if(result.code == 200){
    hasHospitalArr.value = result.data.content
    total.value = result.data.total
  }
}

const getRegion = async()=>{
  let result = await reqRegion()
  if(result.code == 200){
      hasRegionArr.value = result.data
  }
}

const getLevel = async()=>{
  let result = await reqLevel()
  if(result.code == 200){
      hasLevelArr.value = result.data
  }
}

</script>


<style scoped lang="scss">
.cards {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  .card {
    width: 48%;
    margin-right: 15px;
    margin-top: 10px;
  }
}
</style>