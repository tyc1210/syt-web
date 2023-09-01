<template>
    <div class="pagination">
    <el-pagination 
        background 
        layout="prev, pager, next,jumper,->,total" 
        :total="100" 
    />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.pagination{
    margin-right: 20px;
}
</style>