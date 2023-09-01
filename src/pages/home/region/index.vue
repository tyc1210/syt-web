<template>
    <div class="region">
        <div class="content">
            <ul>
                <li>地区：</li>
                <li class="active">全部</li>
                <li>东城区</li>
                <li>西城区</li>
                <li>朝阳区</li>
                <li>丰台区</li>
                <li>石景山区</li>
                <li>海淀区</li>
                <li>门头沟区</li>
                <li>房山区</li>
                <li>通州区</li>
                <li>顺义区</li>
                <li>昌平区</li>
                <li>大兴区</li>
                <li>怀柔区</li>
                <li>平谷区</li>
                <li>密云区</li>
                <li>延庆区</li>
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">

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