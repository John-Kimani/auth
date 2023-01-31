import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "../constants/authenticationConstants";



export const intialState = {
    email: '',
    password: false
}

export const authenticationRequestReducer = (state=intialState, action:{
    type:string;
    payload: any;
}) => {
    switch( action.type ){
        case LOGIN_USER_REQUEST:
        return {...intialState, email:action.payload}
    }

};

