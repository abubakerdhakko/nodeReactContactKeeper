import {
    REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS
} from '../types';


export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false
            };

        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                ...action.payload,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            };
        case REGISTER_SUCCESS:
            localStorage.setItem(`token`, action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                ...action.payload,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
}