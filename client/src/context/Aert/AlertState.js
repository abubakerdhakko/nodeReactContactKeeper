import React, { useReducer } from 'react';
import axios from 'axios';
import AlertContext from './AlertState'
import alertReducer from './alertReduce';
import { v4 as uuid_v4 } from "uuid";

import {
    SET_ALERT, REMOVE_ALERT
} from '../types';

const AlertState = (props) => {
    const initialState = {

    };
    const [state, dispatch] = useReducer(alertReducer, initialState);

    // set alert
    const setAlert = (msg, type, timeout = 5000) => {
        const id = uuid_v4();
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        })
        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
    }
    return (
        <AlertContext.Provider
            value={{
                alerts: state,
                setAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
};


export default AlertState;
