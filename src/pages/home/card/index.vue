<template>
    <div>
        <el-card class="box-card" shadow="hover" >
            <div class="content" @click="goDetail">
                <div class="left">
                    <div class="hospital-name">
                        <h1>{{hospitalInfo.name}}</h1>
                    </div>
                    <div class="tip">
                         <div class="level">
                            <svg t="1693532409516" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4024" width="16" height="16"><path d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z" fill="#bfbfbf" p-id="4025"></path></svg>
                            <p>{{hospitalInfo.level}}</p>
                         </div>
                        <div class="time">
                            <svg t="1693532497456" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5387" width="16" height="16"><path d="M931.2 518.4c0-233.6-188.8-419.2-419.2-419.2-233.6 0-419.2 188.8-419.2 419.2 0 137.6 67.2 259.2 169.6 336l-57.6 51.2c-9.6 9.6-12.8 25.6-3.2 35.2 9.6 9.6 25.6 12.8 35.2 3.2l70.4-57.6c60.8 35.2 131.2 54.4 208 54.4 80 0 153.6-22.4 214.4-60.8 0 0 0 0 3.2 3.2l73.6 60.8c9.6 9.6 25.6 6.4 35.2-3.2 9.6-9.6 6.4-25.6-3.2-35.2l-64-54.4C867.2 774.4 931.2 652.8 931.2 518.4zM512 889.6c-204.8 0-371.2-166.4-371.2-371.2s166.4-371.2 371.2-371.2 371.2 166.4 371.2 371.2S716.8 889.6 512 889.6z" p-id="5388" fill="#cdcdcd"></path><path d="M208 96c-9.6-9.6-25.6-9.6-35.2 0l-118.4 118.4c-9.6 9.6-9.6 25.6 0 35.2 9.6 9.6 25.6 9.6 35.2 0l118.4-118.4C217.6 121.6 217.6 105.6 208 96z" p-id="5389" fill="#cdcdcd"></path><path d="M969.6 211.2l-118.4-115.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l118.4 115.2c9.6 9.6 25.6 9.6 35.2 0C979.2 236.8 979.2 220.8 969.6 211.2z" p-id="5390" fill="#cdcdcd"></path><path d="M707.2 300.8l-144 128c0 0 0 3.2-3.2 3.2-12.8-3.2-22.4-6.4-35.2-6.4-12.8 0-22.4 3.2-32 6.4 0-3.2-3.2-3.2-3.2-6.4l-92.8-83.2c-9.6-9.6-25.6-9.6-35.2 3.2-9.6 9.6-9.6 25.6 3.2 35.2l89.6 80c-16 19.2-28.8 41.6-28.8 70.4 0 54.4 44.8 102.4 102.4 102.4 54.4 0 102.4-44.8 102.4-102.4 0-25.6-9.6-48-25.6-67.2l140.8-124.8c9.6-9.6 9.6-25.6 3.2-35.2C732.8 294.4 716.8 294.4 707.2 300.8zM524.8 582.4c-28.8 0-51.2-22.4-51.2-51.2 0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2C576 556.8 553.6 582.4 524.8 582.4z" p-id="5391" fill="#cdcdcd"></path></svg>
                            <p>{{hospitalInfo.tip}}</p>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img :src="staticServerUrl+hospitalInfo.img" alt="">
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import {Hospital} from '@/api/home/type'
import { useRouter } from "vue-router";
import { ref } from "vue";

//获取路由器对象
let $router = useRouter();
//点击医院卡片的时候跳转到医院详情页面
const goDetail = () => {
  $router.push({ path: "/hospital/register"});
};

const staticServerUrl = ref("http://127.0.0.1:8007/static/imgs/")


defineProps<{
    hospitalInfo:Hospital
}>();


</script>

<style scoped lang="scss">
.content{
    display: flex;
    justify-content: space-between;
    .left{
        display: flex;
        flex-wrap: wrap;
        
        margin-right: 50px;
        .hospital-name{
            margin-top: 5px;
            margin-bottom: 20px;
            width: 100%;
        }
        .tip{
            display: flex;
            width: 100%;
            justify-content: space-between;
            color: #7f7f7f;
            font-size: 14px;
            .level{
                display: flex;
                justify-content: center;
                p{
                    margin-left: 5px;
                }
            }
            .time{
                display: flex;
                justify-content: center;
                p{
                    margin-left: 5px;
                }
            }
        }
    }
    .right{
        img{
            width: 60px;
            height: 60px;
        }
    }
}
</style>