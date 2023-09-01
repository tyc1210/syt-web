<template>
    <div class="search">
        <el-autocomplete clearable class="inline-input w-50" placeholder="请输入医院名称" />
        <el-button type="primary" :icon="Search"></el-button>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { Search } from "@element-plus/icons-vue"


</script>

<style scoped lang="scss">
.search{
    background: white;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    ::v-deep(.el-autocomplete){
        width: 600px;
    }
}
</style>