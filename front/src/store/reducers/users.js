import {CURRENT_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from "../actions/actionTypes";

const initialState = {
    loginError: null,
    user: null,
    token: null,
    currentUser: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_USER_SUCCESS:
            return {...state, user: action.user, token: action.token, loginError: null};
        case LOGIN_USER_FAILURE:
            return {...state, loginError: action.error};
        case CURRENT_USER:
            return {...state, currentUser: action.user};
        case LOGOUT_USER:
            return {...state, user: null};

        default:
            return state;
    }
};

export default reducer;