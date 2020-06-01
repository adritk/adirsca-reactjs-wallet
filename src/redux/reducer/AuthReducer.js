const INITAL_STATE = {
    username : '',
    name: ''
}

const authReducer = (state = INITAL_STATE, action) => {
    switch(action.type){
            case 'LOGIN':
                return {
                    ...state,
                    username: action.payload.username,
                    name: action.payload.name
                    
            }
            default:
                return INITAL_STATE
    } 
}

export default authReducer;