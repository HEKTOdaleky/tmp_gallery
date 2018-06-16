import axios from "../../axios-api";
import {push} from "react-router-redux";
import {FETCH_PHOTO_SUCCESS} from "./actionTypes";

const fetchPhotoSuccess = photo => {
    return {type: FETCH_PHOTO_SUCCESS, photo};
};

export const getPhoto = ()=>{
    return dispatch=>{
        axios.get('/photos').then(
            response => {
                dispatch(fetchPhotoSuccess(response.data))
            },
            error => {
                console.log(error);
            }
        )
    }
};

export const getPhotoById = (id) => {
    return dispatch => {
        axios.get('/photos?prof='+id).then(
            response => {
                dispatch(fetchPhotoSuccess(response.data))
            }
        );
    }
};

export const sendPhoto = data => {
    return dispatch => {
        axios.post('/photos', data).then(
            response => {

                dispatch(push('/'));
            },
            error => {
                console.log(error);
            }
        )
    };
};