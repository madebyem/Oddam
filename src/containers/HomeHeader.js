import {connect} from "react-redux";
import HomeHeader from '../components/HomeHeader';


const mapStateToProps = ({myReducer}) => ({
    isAuth: myReducer.isAuth,
    user: myReducer.email,
});


export default connect(mapStateToProps)(HomeHeader);