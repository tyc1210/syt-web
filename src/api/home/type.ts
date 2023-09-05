import {ResponseData} from '@/api/type'

// 医院
export interface Hospital {
    name: string,
    level: string,
    tip: string,
    img: string
}
// 医院数组类型
export type Content = Hospital[]

// 获取医院列表数据类型
export interface HospitalResponseData extends ResponseData{
    data:{
        total:number
        content: Content
    }
}


export type StringArr = string[]
export interface StringArrResponseData extends ResponseData{
    data: StringArr
}

