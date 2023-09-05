<template>
    <div class="region">
        <div class="content">
            <ul>
                <li>地区：</li>
                <li class="active">全部</li>
                <li v-for="item in names" :key="item">{{item}}</li>
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">
import {StringArr} from '@/api/home/type'
defineProps<{
  names:StringArr
}>()
</script>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin-top: 20px;
  .content {
    display: flex;
    
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 20px;
        margin-bottom: 10px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
      }
    }
  }
}
</style>