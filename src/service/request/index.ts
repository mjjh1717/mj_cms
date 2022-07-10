import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'
// 在代码中引用需要手动导入对应组件的样式
import 'element-plus/es/components/loading/style/css'

// 添加自定义拦截器类型
interface MJRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
// 定义自己的类型 继承axios原始类型的同时集成自定义拦截器的类型
interface MJRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MJRequestInterceptors<T>
  showLoading?: boolean
}
const DEFAULT_LOADING = true

class MJRequest {
  // 引入类型
  private instance: AxiosInstance
  private interceptors?: MJRequestInterceptors
  private loading?: LoadingInstance
  private showLoading: boolean
  // 创建MJREsquest时候传入的选项
  constructor(config: MJRequestConfig) {
    // 获取传入数据
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    // 单个实例独有的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('All_Request_success')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '努力搬运中',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        // console.log('All_Request_error')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // console.log('All_Response_success')
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        switch (res.data.returnCode) {
          case '-1001':
            console.log('请求失败错误信息....')
            break
          // 以此类推...
          default:
            break
        }

        return res.data
      },
      (err) => {
        // console.log('All_Response_error')
        this.loading?.close()
        switch (err.response.status) {
          case 404:
            console.log('404错误...')
            break
          // 以此类推...
          default:
            break
        }
        return err
      }
    )
  }
  // 调用请求发出请求
  request<T>(config: MJRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 获取数据
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求的拦截器
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 重置loading
          this.showLoading = DEFAULT_LOADING
          // 返回res
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          // 重置loading
          this.showLoading = DEFAULT_LOADING
        })
    })
  }
  get<T>(config: MJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: MJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: MJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: MJRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default MJRequest
