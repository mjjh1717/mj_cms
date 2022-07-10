import MJRequest from './request'
const timeout = parseInt(process.env.VUE_APP_TIME_OUT || '1000')
import localCache from '@/utils/cache'
const mjRequest = new MJRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: timeout,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('请求成功的拦截')
      const token = localCache.getCache('token')
      if (token) {
        config.headers ? (config.headers.Authorization = `Bearer ${token}`) : ''
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      // console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应失败的拦截')
      return err
    }
  }
})

export default mjRequest
