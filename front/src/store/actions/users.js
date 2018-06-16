import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {push} from "react-router-redux";
import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
} from "./actionTypes";




const loginUserSuccess = (user, token) => {
    return {type: LOGIN_USER_SUCCESS, user, token};
};

const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};


export const logoutUser = () => {
    return (dispatch,) => {

        return axios.delete('/users/sessions').then(
            response => {
                dispatch({type: LOGOUT_USER});
                dispatch(push('/'))
            }
        );
    }
};
export const logoutExpiredUser = () => {
    return dispatch => {
        dispatch(push('/'));
        dispatch({type: LOGOUT_USER});
        NotificationManager.error('Error', 'Your session has expired, please login again');
    }
};
export const facebookLogin = data => {
    return dispatch => {
        axios.post('/users/facebookLogin', data).then(
            response => {
                dispatch(loginUserSuccess(response.data.user, response.data.token));
                dispatch(push('/'));
            },
            error => {
                dispatch(loginUserFailure(error.response.data));
            }
        )
    };
};