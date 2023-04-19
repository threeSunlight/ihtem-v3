import http from '@/utils/httpRequest'
import * as TS from '@/api/defind'

// 登录接口

const Login = (params: TS.LoginParams) =>  http.post('/sys/login', params).then( (res: TS.LoginTop) => res.data)

//员工请求接口
const UserTableList = (params: TS.UserParams) => http.get('/sys/user', {
    params
}).then( (res: TS.UserTop) => res.data)





export {
    Login,
    UserTableList
}