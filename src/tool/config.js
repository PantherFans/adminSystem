import Vue from 'vue'
import axios from 'axios'

//封装post
export function post (url, data){
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            resolve(res.data)
        }, err => {
            reject(err)
        })
        .catch((error) => {
            reject(error)
        })
    })
}

//响应式拦截
// axios.interceptors.response.use((res) => {
//     if (!Vue.prototype.getCookie('username') && !Vue.prototype.getCookie('password')){
//         Vue.prototype.goLogin()  //调用登录失败的方法
//     }
//     return res;
// })