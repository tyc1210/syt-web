<template>
    <el-config-provider :locale="locale">
        <div class="container">
        <!-- 顶部全局组件 -->
        <HospitalTop/>
        <!-- 展示路由组件区域 -->
        <div class="content">
            <router-view></router-view>
        </div>
        <!-- 底部全局组件 -->
        <HospotalBottom/>
        <!-- 登录组件 -->
        <Login/>
    </div>
    </el-config-provider>
       
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

  export default defineComponent({
    components: {
      ElConfigProvider,
    },
    setup() {
      return {
        locale: zhCn,
      }
    },
  })
</script>

<style scoped lang="scss">
    .container{
        display: flex;
        // 主轴为垂直方向，起点在上沿。
        flex-direction: column;
        align-items: center;
        .content{
            width: 1200px;
            min-height: 900px;
            margin-top: 70px;
            background: #fff;
        }
    }
</style>