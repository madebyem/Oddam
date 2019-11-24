import Logout from '../components/Logout';
import {logout} from "../redux/actions";
import {connect} from "react-redux";

const mapStateToProps = ({myReducer}) => ({
    ...myReducer
});

const mapDispatch = ({
    logout: logout,

});

export default connect(mapStateToProps, mapDispatch)(Logout);