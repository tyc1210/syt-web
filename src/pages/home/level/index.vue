<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <ul>
                <li>等级：</li>
                <li class="active">全部</li>
                <li>三级甲等</li>
                <li>三级乙等</li>
                <li>二级甲等</li>
                <li>二级乙等</li>
                <li>一级甲等</li>
                <li>一级乙等</li>
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">

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