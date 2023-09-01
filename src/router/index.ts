import {createRouter,createWebHashHistory} from 'vue-router'
// createRouter 用于创建路由实例，管理多个路由
export default createRouter({
    // 设置路由模式
    history: createWebHashHistory(),
    routes:[
        {
            path:'/home',
            component: ()=>import('@/pages/home/index.vue')
        },
        {
            path:'/hospital',
            component: ()=>import('@/pages/hospital/index.vue')
        },
        {
            path:'/',
            redirect:'/home'
        },
    ],
    // 滚动行为：控制刷新后滚动条位置
    scrollBehavior(){
        return{
            left:0,
            top:0
        }
    }
})