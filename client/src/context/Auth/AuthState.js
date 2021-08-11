import React, { useReducer } from 'react';
import axios from 'axios';
import authContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
    REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS
} from '../types';

const AuthState = (props) => {
    const initialState = {
        user: null,
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null
    };
    const [state, dispatch] = useReducer(authReducer, initialState);

    // load User
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }
        try {
            const res = await axios.get('/api/auth');
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            })
        }
        catch (e) {
            dispatch({
                type: AUTH_ERROR,

            })
        }
    }
    // Register User

    const register2 = async () => {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        try {
            const res = await axios.get('http://localhost:5000/api/contacts/res');
            console.log('res.data', res.data)
        } catch (err) {
            console.error(err);
        }
    }
    const register = async formData => {
        const config = {
            headers: { "Content-Type": "application/json" }
        }
        try {
            console.log('formData', formData)
            const res = await axios.post(`http://localhost:5000/api/users`, formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            })
            loadUser();
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    }


    // Login User

    // Logout User

    // Clear Error
    return (
        <authContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                error: state.error,
                user: state.user,
                register,
                loadUser,
                register2,

            }}
        >
            {props.children}
        </authContext.Provider>
    );
};


export default AuthState;
