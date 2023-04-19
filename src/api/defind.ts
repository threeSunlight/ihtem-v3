// 登录参数校验
interface LoginParams {
    mobile: string,
    password: string
}

/**登录的返回值校验 */
interface LoginRes {
    success: boolean,
    code: number
    message: string
    data: string
}

interface LoginTop {
    [propName: string]: any;
    data: LoginRes
}

/**code封装 */
enum Code {
    /**成功 */
    SUCCESS = 10000

}


/**员工传参 */
interface UserParams {
    page: number,
    size: number
}

/**员工数组列表渲染 */
interface useTableList {
    id: string,
    mobile: string
    username: string
    password: string
    enableState: number
    createTime: string | null
    companyId: string
    companyName: string
    departmentId: string
    timeOfEntry: string
    formOfEmployment: number
    workNumber: string
    formOfManagement: null
    workingCity: null
    correctionTime: string | null
    inServiceStatus: number
    departmentName: string
    level: string
    staffPhoto: string | null
}
/**员工列表数组检验 */
interface TableRes {
    data: {
        total: number,
        rows: Array<useTableList>,
    },
    success: boolean,
    code: number,
    message: string,
}
/** 员工的返回参数*/
interface UserTop {
    [propName: string]: any;
    data: TableRes,
   
}


export {
    LoginParams,
    LoginTop,
    Code,
    UserParams,
    UserTop,
    useTableList
}