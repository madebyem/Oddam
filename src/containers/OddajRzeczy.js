import {connect} from "react-redux";
import OddajRzeczy from '../components/OddajRzeczy/OddajRzeczy';

const mapStateToProps = ({myReducer}) => ({
    isAuth: myReducer.isAuth,
});


export default connect(mapStateToProps)(OddajRzeczy);