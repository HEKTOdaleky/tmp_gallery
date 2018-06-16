import {FETCH_PHOTO_SUCCESS} from "../actions/actionTypes";

const initialState = {
    photos:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PHOTO_SUCCESS:
            return {...state, photos:action.photo};

        default:
            return state;
    }
};

export default reducer;