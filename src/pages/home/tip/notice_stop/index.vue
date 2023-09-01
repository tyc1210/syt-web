<template>
    <div class="notice-common">
        <div class="title">
            <div class="left">
                
                <svg t="1693550172894" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19292" width="16" height="16"><path d="M916.736 760.928L864 716.032V480c0-161.44-108.672-297.504-256.864-339.008a96 96 0 1 0-190.272 0C268.672 182.496 160 318.56 160 480v237.856l-52.224 42.656A31.968 31.968 0 0 0 96 785.312v63.584a32 32 0 0 0 32 32h188.096c2.56 4.48 5.088 8.96 7.968 13.248a223.776 223.776 0 0 0 186.464 99.808 223.872 223.872 0 0 0 190.72-106.464c1.312-2.144 2.336-4.416 3.584-6.592H896a32 32 0 0 0 32-32v-63.584a32 32 0 0 0-11.264-24.384zM510.496 929.92a159.424 159.424 0 0 1-114.912-49.056h229.824a159.264 159.264 0 0 1-114.912 49.056zM864 816.864H160V800.48l64-52.256V480a288.128 288.128 0 0 1 210.144-277.376l53.632-15.008-7.488-55.2a32 32 0 1 1 63.424 0l-7.488 55.2 53.632 15.008A288.128 288.128 0 0 1 800 480v265.6l64 54.496v16.768z" p-id="19293" fill="#f4ea2a"></path></svg>
                    <span>停诊公告</span>
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
                    <svg t="1693550208571" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20419" width="16" height="16"><path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="20420" fill="#f4ea2a"></path></svg>
                    <p>中国人民解放军总医院第六医学中心(原海军总医院)呼吸内科门诊停诊公告</p>
                </li>
                <li>
                    <svg t="1693550208571" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20419" width="16" height="16"><path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="20420" fill="#f4ea2a"></path></svg>
                    <p>首都医科大学附属北京潞河医院老年医学科门诊停诊公告</p>
                </li>
                <li>
                    <svg t="1693550208571" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20419" width="16" height="16"><path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="20420" fill="#f4ea2a"></path></svg>
                    <p>中日友好医院中西医结合心内科门诊停诊公告</p>
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
