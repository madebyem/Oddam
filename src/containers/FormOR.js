import React from "react";
import FormOR from '../components/OddajRzeczy/FormOR';
import {sendRequest} from "../redux/actions";
import {connect} from "react-redux";

const mapStateToProps = ({myReducer}) => ({
    ...myReducer //state stworzony przez redureca quote
});

const mapDispatch = (dispatch) => ({
    sendRequest: dispatch(sendRequest()),

});
export default connect(mapStateToProps, mapDispatch)(FormOR);