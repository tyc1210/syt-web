import {createRouter,createWebHashHistory} from 'vue-router'
// createRouter 用于创建路由实例，管理多个路由
export default createRouter({
    // 设置路由模式
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component: ()=>import('@/pages/home/index.vue')
        },
        {
            path:'/hospital',
            component: ()=>import('@/pages/hospital/index.vue'),
            children:[
                {
                    path:'register',
                    component:()=>import('@/pages/hospital/register/index.vue'),
                },
                {
                    path:'close',
                    component:()=>import('@/pages/hospital/close/index.vue'),
                },
                {
                    path:'detail',
                    component:()=>import('@/pages/hospital/detail/index.vue'),
                },
                {
                    path:'search',
                    component:()=>import('@/pages/hospital/search/index.vue'),
                },
                {
                    path:'notice',
                    component:()=>import('@/pages/hospital/notice/index.vue'),
                }
            ]
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

