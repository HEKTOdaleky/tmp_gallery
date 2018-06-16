import axios from "../../axios-api";
import {push} from "react-router-redux";
import {CURRENT_USER, FETCH_PHOTO_SUCCESS} from "./actionTypes";

const fetchPhotoSuccess = photo => {
    return {type: FETCH_PHOTO_SUCCESS, photo};
};
const currentUser = user => {
    return {type: CURRENT_USER, user};
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
        axios.get('/photos/'+id).then(
            response => {
                dispatch(fetchPhotoSuccess(response.data));
                dispatch(currentUser(id));
                dispatch(push('/users'));

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

export const deletePhoto = (photo) => {

    return dispatch => {
         axios.delete('/photos/' + photo)
            .then(response => {
                dispatch(push('/'));


            },err=>{
                alert("Вы не можете удалить чужой товар")
            });
    }
};