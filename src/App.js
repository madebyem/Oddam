import React, {Suspense} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter, withRouter} from "react-router-dom";
import Home from "./components/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Logout from './containers/Logout'
import OddajRzeczy from "./containers/OddajRzeczy";
import {Provider} from "react-redux";
import store from "../src/redux/store";
import {connect} from 'react-redux';
import {authCheckState} from "./redux/actions";
import NotFound from "./components/NotFound";

class App extends React.Component {
    componentDidMount() {
        this.props.onTryAutoSignUp()
    }

    render() {
        const style = {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: "100vw",
            height: 'auto',
            minHeight:"100vh"
        };


        return (
            <div style={style}>
                <Suspense fallback="loading">
                    <Provider store={store}>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path='/oddamrzeczy' component={Home}/>
                                <Route path="/logowanie" component={Login}/>
                                <Route path="/rejestracja" component={Register}/>
                                <Route path="/wylogowano" component={Logout}/>
                                <Route path="/oddaj-rzeczy" component={OddajRzeczy}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </BrowserRouter>
                    </Provider>
                </Suspense>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignUp: () => dispatch(authCheckState())
    }
};

export default withRouter(connect(null, mapDispatchToProps)(App));
