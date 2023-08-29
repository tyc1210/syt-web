import { createApp } from 'vue'
// 清除默认样式
import '@/style/reset.scss'

import App from './App.vue'
// 引入全局组件 顶部和底部
import HospitalTop from '@/components/hospital_top/index.vue'
import HospotalBottom from  '@/components/hospotal_bottom/index.vue'

const app = createApp(App);
app.component('HospitalTop',HospitalTop);
app.component('HospotalBottom',HospotalBottom);
app.mount('#app')
