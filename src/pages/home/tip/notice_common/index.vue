<template>
    <div class="notice-common">
        <div class="title">
            <div class="left">
                
                    <svg t="1693549893312" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="16881" width="16" height="16">
                        <path
                            d="M694.368 117.28a67.957333 67.957333 0 0 1 10.336 36.021333v717.408a67.957333 67.957333 0 0 1-103.978667 57.632L326.026667 756.650667H180.48A95.146667 95.146667 0 0 1 85.333333 661.504V362.506667a95.146667 95.146667 0 0 1 95.146667-95.146667h145.546667L600.725333 95.68a67.957333 67.957333 0 0 1 93.653334 21.610667z m120.330667 133.525333a32 32 0 0 1 44.533333 8.042667 443.114667 443.114667 0 0 1 0.117333 506.133333 32 32 0 0 1-52.586666-36.458666 379.114667 379.114667 0 0 0-0.106667-433.184 32 32 0 0 1 8.042667-44.533334z"
                            fill="#1296db" p-id="16882"></path>
                    </svg>
                    <span>平台公告</span>
            </div>
            <div class="right">
                <span>全部</span>
                <svg t="1693536396481" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="10256" width="16" height="16">
                    <path
                        d="M970.496 543.829333l30.165333-30.165333-415.829333-415.914667a42.837333 42.837333 0 0 0-60.288 0 42.538667 42.538667 0 0 0 0 60.330667l355.413333 355.498667-355.413333 355.285333a42.496 42.496 0 0 0 0 60.288c16.64 16.64 43.861333 16.469333 60.288 0.042667l383.914667-383.701334 1.749333-1.664z"
                        fill="#bfbfbf" p-id="10257"></path>
                </svg>
            </div>
        </div>
        <div class="content">
            <ul>
                <li>
                    <svg t="1693549615620" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="12224" width="16" height="16">
                        <path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="12225" fill="#1296db"></path>
                    </svg>
                    <p>关于延长北京大学国际医院放假的通知</p>
                </li>
                <li>
                    <svg t="1693549615620" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="12224" width="16" height="16">
                        <path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="12225" fill="#1296db"></path>
                    </svg>
                    <p>北京中医药大学东方医院部分科室医生门诊医</p>
                </li>
                <li>
                    <svg t="1693549615620" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="12224" width="16" height="16">
                        <path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="12225" fill="#1296db"></path>
                    </svg>
                    <p>武警总医院号源暂停更新通知</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.notice-common {
    margin-top: 30px;
    color: #7f7f7f;

    .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        .left {
            display: flex;
            justify-content: center;
            span{
                margin-left: 10px;
            }
        }

        .right {
            display: flex;
            justify-content: center;

            span {
                margin-left: 10px;
            }
        }
    }

    .content {
        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                width: 100%;
                margin-bottom: 10px;
                display: flex;
                flex-wrap: wrap;

                p {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    flex: 1;
                }

            }
        }
    }



}</style>
