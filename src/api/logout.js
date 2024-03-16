import API_CONFIG from './index.js'
import request from '../api/index.js'

//封装的login只需要传入用户名和密码
export const logout = (username,password) =>{
    /*
     {
        username: username,
        password: password
     }
     当键值名字一样时可简写为:
     {username,password}
    */ 
    return request(API_CONFIG.logoutApi,{username,password},'post',3000)
}