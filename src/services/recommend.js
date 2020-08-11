import request from './request'

export const getBanner = () => {
 return request({
   method:'get',
   url:'/banner'
 })
}