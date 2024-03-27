import {API_CONFIG} from '../config/index.js'
import request from './index.js'

//封装的login接口 只需要传入用户名和密码
export const getUserList = () =>{
    /*
     {
        username: username,
        password: password
     }
     当键值名字一样时可简写为:
     {username,password}
    */ 
    return request(API_CONFIG.userListApi,{},'get',3000)
}