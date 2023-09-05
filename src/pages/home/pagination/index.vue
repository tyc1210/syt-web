<template>
    <div class="pagination">
    <el-pagination 
        background 
        layout="prev, pager, next,jumper,->,total" 
        :page-size="10"
        :total=total
        @prev-click="pageChange"
        @next-click="pageChange"
        @current-change="pageChange"
    />
    </div>
</template>

<script setup lang="ts">
import { onMounted} from "vue";


onMounted(() => {
    pageChange(1)
});

defineProps<{
    total:number
}>()

const emits = defineEmits(['getHospitalInfo'])

const pageChange = (page: number) => {
  const p = page - 1
  emits('getHospitalInfo',p,10)
}
</script>

<style scoped lang="scss">
.pagination{
    margin-right: 20px;
}
</style>