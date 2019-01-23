import { post } from '../tool/config'

export default {

    //用户信息接口
    userInfo (data) {
        return post('http://localhost:3000/users', data)
    },

    //公司信息接口
    companyId (data) {
        return post('http://localhost:3000/companyId',data)
    }

}
