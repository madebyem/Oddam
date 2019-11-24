import {connect} from "react-redux";
import HeaderOR from '../components/OddajRzeczy/HeaderOR';
import * as actions from '../redux/actions';
import {register} from "../redux/actions";


const mapStateToProps = ({myReducer}) => ({
    isAuth: myReducer.isAuth,
    user: myReducer.email,
});


export default connect(mapStateToProps)(HeaderOR);