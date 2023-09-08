<template>
    <div class="register">
        <div class="top">
            <div class="name">航天中心医院</div>
            <div class="level">
                <svg t="1693532409516" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="4024" width="16" height="16">
                    <path
                        d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                        fill="#bfbfbf" p-id="4025"></path>
                </svg>
                <p>三级乙等</p>
            </div>
        </div>

        <div class="rule">
            <img src="../../../assets/images/hos.png" alt="">

            <div class="content">
                <h2>挂号规则</h2>
                <p>预约周期：10天</p>
                <p>放号时间：08:00</p>
                <p>停挂时间：12:30</p>
                <p>预约周期：10天</p>
                <p>具体地址：北京市市辖区西城区</p>
                <p>规划路线：
                    顺12、14、18、19、28、31、34、38、39、40路到中医院；顺2、11、15、16、17、20、21、22、23、24、25、26、27、29、32、33、36、37、41、43、45路、945到国泰下车，向南行300米即到
                </p>
                <p>退号时间：就诊前一工作日15:30前取消</p>
                <h2>医院预约规则</h2>
                <ul>
                    <li>西院区预约号取号地点：西院区门诊楼一层大厅挂号窗口取号</li>
                    <li>西院区预约号取号地点：西院区门诊楼一层大厅挂号窗口取号</li>
                </ul>
            </div>
        </div>

        <div class="department">
            <div class="department_type">
                <ul>
                    
                    <li :class="{active:true}">专科</li>
                    <li>妇产科</li>
                    <li>国际医疗部</li>
                    <li>中医科</li>
                    <li>五官</li>
                    <li>外科</li>
                    <li>营养科</li>
                    <li>儿科</li>
                    <li>内科</li>
                    <li>儿科</li>
                    <li>内科</li>
                    
                </ul>
            </div>
            <div class="department_name">
                222
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.register {
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-top: 10px;

    .top {
        display: flex;
        width: 100%;

        .name {
            font-size: 25px
        }

        .level {
            display: flex;
            margin-left: 10px;
            color: #7f7f7f;
            margin-left: 10px;
            align-items: center;

            p {
                margin-left: 6px
            }
        }
    }

    .rule {
        margin-top: 20px;
        display: flex;

        img {
            width: 80px;
            height: 80px;

        }

        .content {
            margin-left: 10px;
            margin-top: 10px;
            line-height: 25px;

            h2 {
                margin-bottom: 10px;
                margin-top: 10px;
            }

            p {
                color: #7f7f7f;
                font-size: 15px;
            }

            ul {
                list-style-type: disc;

                li {
                    color: #7f7f7f;
                    font-size: 15px;
                    margin-left: 35px;
                }
            }
        }
    }

    .department{
        width: 100%;
        height: 500px;
        margin-top: 20px;
        display: flex;
        .department_type{
            width: 80px;
            height: 100%;
            ul{
                width: 100%;
                height: 100%;
                background: rgb(248,248,248);
                display: flex;
                flex-direction: column;
                li{
                    flex: 1;
                    text-align: center;
                    font-size: 14px;
                    color: #7f7f7f;
                    line-height: 20px;
                    &.active{
                        border-left: 2px solid red;
                    }
                   
                }
                li:hover{
                    color: #55a6fe;;
                }
            }
        }
        .department_name{
            flex: 1;
            margin-left: 10px;
        }
    }
}</style>