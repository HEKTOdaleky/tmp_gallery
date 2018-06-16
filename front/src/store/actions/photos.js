import axios from "../../axios-api";
import {push} from "react-router-redux";


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