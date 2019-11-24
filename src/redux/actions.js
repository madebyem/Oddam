import axios from '../axios-request';
import {apiKey} from '../axios-request';

const STARTREG = "STARTREG";
const REGISTERED = "REGISTERED";
const REG_ERROR = "REG_ERROR";
const REQ_START = "REQ_START";
const REQ_SENT = "REQ_SENT";
const REQ_ERROR = "REQ_ERROR";
const LOGOUT = "LOGOUT";


export const startReg = () => ({type: STARTREG});
export const registered = (payload) => ({type: REGISTERED, payload});
export const regError = (payload) => ({type: REG_ERROR, payload});
export const startSending = () => ({type: REQ_START});
export const sentRequest = (payload) => ({type: REQ_SENT, payload});
export const sendingError = (payload) => ({type: REQ_ERROR, payload});
export const logout = () => ({type: LOGOUT});


export const register = () => (dispatch) => (authData) => {
    dispatch(startReg());
    console.log(authData);
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, authData)
        .then((data) => {
            console.log(data);
            const expirationDate = new Date(new Date().getTime() + data.data.expiresIn * 1000);
            localStorage.setItem("token", data.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', data.data.localId);
            localStorage.setItem('email', data.data.email);
            dispatch(registered({idToken: data.data.idToken, localId: data.data.localId, email: data.data.email}))
        })
        .catch((error) => dispatch(regError(error)))
};

export const login = () => (dispatch) => (loginData) => {
    dispatch(startReg());
    console.log(loginData);
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, loginData)
        .then((data) => {
            console.log(data);
            const expirationDate = new Date(new Date().getTime() + data.data.expiresIn * 1000);
            localStorage.setItem("token", data.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', data.data.localId);
            localStorage.setItem('email', data.data.email);
            dispatch(registered({idToken: data.data.idToken, localId: data.data.localId, email: data.data.email}));
            dispatch(checkAuthTimeout(data.data.expiresIn))
        })
        .catch((err) => dispatch(regError(err)))
};

export const sendRequest = () => (dispatch) => (token, requestData) => {
    dispatch(startSending());
    axios.post('/oddaj-rzeczy.json?auth=' + token, requestData)
        .then((response) => {
            console.log(response);
            dispatch(sentRequest(requestData))
        })
        .catch(error => {
            console.log(error);
            dispatch(sendingError(error))
        })

};

export const checkAuthTimeout = (expTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expTime * 1000)
    }
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));


            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                const localId = localStorage.getItem('userId');
                const email = localStorage.getItem('email');
                dispatch(registered({idToken: token, localId: localId, email: email}));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}
