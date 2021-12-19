import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config;
  },error => {
    console.log(error);
  })

  // 响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },error => {
    console.log(error);
  })

  return instance(config)
}

export function request2(config) {
  const instance = axios.create({
    baseURL:'http://rap2api.taobao.org/app/mock/296057',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config;
  },error => {
    console.log(error);
  })

  // 响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },error => {
    console.log(error);
  })

  return instance(config)
}
