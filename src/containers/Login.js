import Login from '../components/Login';
import {login} from "../redux/actions";
import {connect} from "react-redux";

const mapStateToProps = ({myReducer}) => ({
    ...myReducer
});

const mapDispatch = (dispatch) => ({
    login: dispatch(login()),

});
export default connect(mapStateToProps, mapDispatch)(Login);