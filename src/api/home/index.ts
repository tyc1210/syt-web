// 统一管理首页模块接口
import request from '@/utils/request'
import {HospitalResponseData,StringArrResponseData} from './type'

// 通过枚举管理首页模块接口地址
enum API {
    // 获取已有医院的数据接口地址
    HOSPITAL_URL = '/hosp/hospital/',
    HOSPITAL_LEVEL_URL = '/hosp/level',
    HOSPITAL_REGION_URL = '/hosp/region',
}
// 获取医院的数据
export const reqHospital = (page: number, limit: number) => request.get<any,HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}`)

// 获取医院等级
export const reqRegion = () => request.get<any,StringArrResponseData>(API.HOSPITAL_REGION_URL)
// 获取医院地区
export const reqLevel = () => request.get<any,StringArrResponseData>(API.HOSPITAL_LEVEL_URL)