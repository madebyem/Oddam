import React from "react";
import {Redirect} from 'react-router-dom'
import HeaderOR from "../../containers/HeaderOR";
import Contact from "../Contact";
import FormOR from '../../containers/FormOR'

export default class OddajRzeczy extends React.Component {
    render() {
        let authRedirect = null
        if (!this.props.isAuth) {
            authRedirect = <Redirect to="/logowanie"/>
        }
        return (
            <div className="home" id="home" name="home">
                {authRedirect}
                <HeaderOR/>
                <FormOR/>
                <Contact/>
            </div>
        )
    }
}