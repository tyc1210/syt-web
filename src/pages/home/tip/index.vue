<template>
    <div>
        <Department/>
        <NoticeCommon/>
        <NoticeStop/>
    </div>
</template>

<script setup lang="ts">
// 引入科室组件
import Department from './department/index.vue'
// 引入平台公告组件
import NoticeCommon from './notice_common/index.vue'
// 引入停诊公告组件
import NoticeStop from './notice_stop/index.vue'

</script>

<style scoped lang="scss">

</style>