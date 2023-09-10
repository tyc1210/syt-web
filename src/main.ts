// 引入函数
import { createApp } from 'vue'
// 清除默认样式
import '@/style/reset.scss'
// 引入组件
import App from './App.vue'
// 引入全局组件 顶部和底部
import HospitalTop from '@/components/hospital_top/index.vue'
import HospotalBottom from  '@/components/hospotal_bottom/index.vue'
import Login from '@/components/login/index.vue'
// 引入路由
import router from '@/router'
// 引入element-ui
import ElementPlus from 'element-plus'
// 引入element-ui样式
import 'element-plus/dist/index.css'

// 创建 app
const app = createApp(App);
// 注册全局组件
app.component('HospitalTop',HospitalTop);
app.component('HospotalBottom',HospotalBottom);
app.component('Login',Login)
// 安装路由
app.use(router)
// 使用element-ui
app.use(ElementPlus)
// 挂载
app.mount('#app')
