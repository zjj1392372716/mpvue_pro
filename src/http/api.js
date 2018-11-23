import fly from './flyio'
import qs from 'qs'

/**
 * get 请求
 * @param url    地址
 * @param params 数据
 * @returns {Promise<any>}
 */
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    fly.get(url, qs.stringify(params)).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

/***
 * post 请求
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    fly.post(url, qs.stringify(params)).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

/**
 * 业务 api
 */

// 测试get请求
export const index = () => {
  let url = '/index'
  return get(url, {})
}

// 测试post请求
export const testpost = (data) => {
  let url = '/testpost'
  return post(url, data)
}
