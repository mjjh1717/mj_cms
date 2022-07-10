// console.log('axios_demo')
// // axios的实例对象
// import axios from 'axios'

// 调用axios,传入一个url后会返回一个类型为
// AxiosResponse的promise类型(已经执行了resolev和reject判断)
// 用人话说就是axios将请求数据包裹在promise中返回

// 模拟请求
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })

// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'codermjjh',
//       age: '18'
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'codermjjh',
//       age: '18'
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios的全局配置选项
// 默认url
// axios.defaults.baseURL = 'http://httpbin.org'
// // 超时时间
// axios.defaults.timeout = 10000

// axios
//   .get('/get', {
//     params: {
//       name: 'codermjjh',
//       age: '18'
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// axios
//   .post('/post', {
//     data: {
//       name: 'codermjjh',
//       age: '18'
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios.all(就是用的promise里的方法)
// axios
//   .all([
//     axios.get('/get', { params: { name: 'codermjjh', age: 18 } }),
//     axios.post('/post', { data: { name: 'codermjjh', age: 18 } })
//   ])
//   .then((res) => {
//     console.log(res[0].data)
//     console.log(res[1].data)
//   })
// axios的拦截器
// f1在请求发送成功时候会执行的函数
// f2在请求发送失败时候会执行的函数
// axios.interceptors.request.use(
//   (config) => {
//     // 想做的一些事情
//     // 给请求添加token
//     // 触发加载动画
//     console.log('请求成功的拦截')
//     return config
//   },
//   (err) => {
//     console.log('请求失败的拦截')
//   }
// )

// f1数据响应成功时候会执行的函数
// f2数据响应失败时候会执行的函数
// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应成功的拦截')
//     return res
//   },
//   (err) => {
//     console.log('响应失败的拦截' + err)
//   }
// )
