import {connect} from "react-redux";
import HeaderOR from '../components/OddajRzeczy/HeaderOR';


const mapStateToProps = ({myReducer}) => ({
    isAuth: myReducer.isAuth,
    user: myReducer.email,
});


export default connect(mapStateToProps)(HeaderOR);