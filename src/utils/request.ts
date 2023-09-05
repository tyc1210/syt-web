// 对于 axios 函数库进行二次封装
// 目的 
// 利用axios请求，响应拦截器功能
// 请求拦截器中携带公共参数：token
// 响应拦截器简化服务器返回数据处理http错误
import axios from 'axios'
import {ElMessage} from 'element-plus'
const request = axios.create({
    baseURL:'/api',
    timeout:5000
})

// 请求拦截器
request.interceptors.request.use((config) =>{
    config.headers.a=111;
    return config
})

// 响应拦截器
request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
    let status = error.response.status;
    switch (status){
        case 404:
            ElMessage({
                type: 'error',
                message:'请求路径无效'
            })
            break
        case 500|501|502|503|504|505:
            ElMessage({
                type: 'error',
                message:'服务器异常'
            })
            break
        case 401:
            ElMessage({
                type: 'error',
                message:'参数有误'
            })
            break
    }
    // 处理http错误
    return Promise.reject(new Error(error.message))
})

export default request;