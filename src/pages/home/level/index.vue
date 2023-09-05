<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <ul >
                <li>等级：</li>
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
.level {
  h1{
    margin-bottom: 20px;
  }  
  color: #7f7f7f;
  margin-top: 10px;
  .content {
    display: flex;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 20px;
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