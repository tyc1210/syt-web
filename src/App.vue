<template>
    <div class="container">
        <!-- 顶部全局组件 -->
        <HospitalTop/>
        <!-- 展示路由组件区域 -->
        <div class="content">
            xxxx
        </div>
        <!-- 底部全局组件 -->
        <HospotalBottom/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        .content{
            width: 1200px;
            min-height: 800px;
            margin-top: 70px;
            background: red;
        }
    }
</style>