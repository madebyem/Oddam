import Register from '../components/Register';
import {register} from "../redux/actions";
import {connect} from "react-redux";

const mapStateToProps = ({myReducer}) => ({
    ...myReducer
});

const mapDispatch = (dispatch) => ({
    register: dispatch(register()),

});
export default connect(mapStateToProps, mapDispatch)(Register);