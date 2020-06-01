
export const Login = (data) => {
    return {
        type: 'LOGIN',
        payload: data
    }
}

//ini action creater
export const Logout = () => {
    return{
        type: 'LOGOUT'
    }
}
