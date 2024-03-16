import axios from 'axios'

//定义四个有默认值的参数
const request = (url='',data={},method='get',timeout=5000) =>{

    //返回一个Promise对象，用于异步处理请求结果。resolve和reject是Promise的两个回调函数，分别用来表示成功和失败。
    return new Promise((resolve,reject)=>{
        // console.log("使用axios请求接口")
        //将请求参数强制转换为小写
        const methodLower = method.toLowerCase()
        if (methodLower === 'get'){
            //
            axios({
                method: methodLower,
                params: data,
                url: url,
                timeout: timeout,
            })
            //成功
            .then(
                (response)=>{
                    resolve(response)
                }
            )
            //失败
            .catch(
                (error)=>{
                    reject(error)
                }
            )
        }else if (methodLower=== 'post'){
            axios({
                method: methodLower,
                data: data,
                url: url,
                timeout: timeout,
            })
            .then(
                (response)=>{
                    resolve(response)
                }
            )
            .catch(
                (error)=>{
                    reject(error)
                }
            )
        }
    })
}

export default request