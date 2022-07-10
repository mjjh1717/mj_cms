import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import { store, key } from './store'
import 'element-plus/theme-chalk/index.css'

// 引入axios_demo测试axios
// import './service/axios_demo'
// import mjRequest from './service'

createApp(App).use(router).use(store, key).mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_TIME_OUT)

// mjRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

// mjRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   showLoading: true
// })
// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// mjRequest
//   .get<DataType>({
//     url: '/home/multidata'
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
