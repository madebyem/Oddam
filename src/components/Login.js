import React from "react";
import Nav from "./Nav";
import decoration from "../assets/Decoration.svg";
import FormErrors from "./FormErrors";
import {Link} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import {withTranslation} from 'react-i18next';


export class Login1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            showWarnings: false,
        }
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value, showWarnings: false},
            () => {
                this.validateField(name, value)
            })
    };

    handleLogin = (e) => {
        e.preventDefault();
        this.validateForm();
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        const {t} = this.props;

        switch (fieldName) {
            case 'email':
                emailValid = (value.length > 0 && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
                fieldValidationErrors.email = emailValid ? '' : `${t("login.erremail")}`;
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : `${t("login.errpass")}`;
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,

        });
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid,
            showWarnings: true,
        });
        const loginData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true,
        };
        const formVal = this.state.emailValid && this.state.passwordValid
        this.sendData(loginData, formVal);
    }

    sendData = (loginData, formVal) => {

        if (formVal) {
            this.props.login(loginData);
        }
    };


    render() {
        const {t} = this.props;
        let authRedirect = null;
        if (this.props.isAuth) {
            authRedirect = <Redirect to="/"/>
        }
        return (
            <div className="loginwindow">
                {authRedirect}
                <div className="container">
                    <div className="navigation">
                        <Nav/>
                    </div>
                    <div className="loginform">
                        <h1>{t('login.title')}</h1>
                        <img src={decoration} alt="decoration"/>
                        <div className="form">
                            <form onSubmit={this.handleLogin}>
                                <div className="first">
                                    <label htmlFor="email">
                                        Email
                                        <input
                                            style={{borderColor: (this.state.emailValid === false || this.state.emailValid === null) && this.state.showWarnings ? 'red' : 'gray'}}
                                            type="e-mail" id="email" name="email"
                                            onChange={(event) => this.handleUserInput(event)} value={this.state.email}/>
                                        <div className="panel panel-default"
                                             style={{visibility: this.state.showWarnings ? 'visible' : 'hidden'}}>
                                            <FormErrors formErrors={this.state.formErrors.email}/>
                                        </div>
                                    </label>
                                    <label htmlFor="password">
                                        {t('login.password')}
                                        <input
                                            style={{borderColor: (this.state.passwordValid === false || this.state.passwordValid === null) && this.state.showWarnings ? 'red' : 'gray'}}
                                            type="password" id="password" name="password"
                                            onChange={(event) => this.handleUserInput(event)}
                                            value={this.state.password}/>
                                        <div className="panel panel-default"
                                             style={{visibility: this.state.showWarnings ? 'visible' : 'hidden'}}>
                                            <FormErrors formErrors={this.state.formErrors.password}/>
                                        </div>
                                    </label>
                                </div>
                                <div className="error">
                                    <p>{this.props.error}</p>
                                </div>
                                <div className="buttons">
                                    <Link className="changeaction" to="/rejestracja">{t('login.signin')}</Link>
                                    <button  className="submit" type="submit">{t('login.login')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Login = withTranslation()(Login1);
export default Login;