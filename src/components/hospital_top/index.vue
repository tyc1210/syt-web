<template>
    <div class="top">
        <div class="content">
            <!-- 左侧 -->
            <div class="left">
                <img src="../../assets/images/logo.png" alt="">
                <p>尚医通 预约挂号统一平台</p>
            </div>
            <!-- 右侧 -->
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login">登录/注册</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .top {
        // 固定容器不随滚动条变化
        position: fixed;
        // 防止被其他容器覆盖
        z-index: 999;
        width: 100%;
        height: 70px;
        background: white;
        display: flex;
        // 设置主轴上子元素的对齐方式为居中对齐
        justify-content: center;

        .content{
            width: 1200px;
            height: 70px;
            background: white;
            display: flex;
            justify-content: space-between;
            .left{
                display: flex;
                justify-content: center;
                // 子元素将在容器的侧轴上居中对齐，无论它们的高度是否相等
                align-items: center;
                img{
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                }
                p{
                    font-size: 20px;
                    color: #55a6fe;
                }
            }
            .right{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                color: #7c7171;
                .help{
                    margin-right: 10px;
                }
            }
        }
    }
</style>