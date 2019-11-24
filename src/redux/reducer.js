import {combineReducers} from "redux";


const initialState = {
    loading: false,
    error: "",
    isAuth: false,
    email: "",
    token: null,
    userId: null,
    request: {},
    sending: false,
    reqError: "",
};

const myReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "STARTREG": {
            return {
                ...state,
                loading: true,
                error: "",
            }
        }

        case "REGISTERED": {
            const email = payload.email.toString();
            const token = payload.idToken;
            const userId = payload.localId;
            return {
                ...state,
                loading: false,
                isAuth: true,
                error: "",
                email: email,
                token: token,
                userId: userId
            }
        }

        case "REG_ERROR": {
            return {
                ...state,
                loading: false,
                error: "Podane dane są nieprawidłowe!",
            }
        }

        case "REQ_START": {
            return {
                ...state,
                sending: true,
                reqError: "",
            }
        }

        case "REQ_SENT": {
            const request = payload;
            return {
                ...state,
                sending: false,
                reqError: "",
                request: request
            }
        }

        case "REQ_ERROR": {
            return {
                ...state,
                sending: false,
                reqError: payload,
            }
        }
        case "LOGOUT": {
            localStorage.removeItem('token');
            localStorage.removeItem('expirationDate');
            localStorage.removeItem('email')
            localStorage.removeItem('userId');
            return {
                ...state,
                token: null,
                userId: null,
                email: null,
                request: {},
                isAuth: false,
            }
        }
        default:
            return state;
    }
};


export default combineReducers({
    myReducer,

});
