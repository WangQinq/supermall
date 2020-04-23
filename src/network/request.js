// 网络封装
import axios from 'axios'
export function request(config){
        //1.创建axios实例
    const instancel=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    //2.axios拦截器
    instancel.interceptors.request.use(config=>{
        console.log(config);
        return config
    },err=>{
        console.log(err)
    })
       //拦截响应
    instancel.interceptors.response.use(res=>{
        console.log(res);
        return res.data
    },err=>{
        console.log(err)
    })
    //3.发送真正的网络请求
     return instancel(config)
}
