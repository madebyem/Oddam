import React from "react";
import Nav from "./Nav";
import decoration from "../assets/Decoration.svg";
import FormErrors from "./FormErrors";
import Link2 from "react-router-dom/Link";
import "firebase/auth";
import "firebase/firestore";
import {withTranslation} from "react-i18next";


export class Register1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            repeatedPassword: "",
            formErrors: {email: '', password: '', repeatedPassword: ''},
            emailValid: false,
            passwordValid: false,
            repeatedPasswordValid: false,
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
            });
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.validateForm();


    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let repeatedPasswordValid = this.state.repeatedPasswordValid;
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
            case 'repeatedPassword':
                repeatedPasswordValid = (value === this.state.password);
                fieldValidationErrors.repeatedPassword = repeatedPasswordValid ? '' : `${t("signup.errreppass")}`;
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            repeatedPasswordValid: repeatedPasswordValid,
        });
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid && this.state.repeatedPasswordValid,
            showWarnings: true,
        });
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true,
        }
        const formVal = this.state.emailValid && this.state.passwordValid && this.state.repeatedPasswordValid;
        this.sendData(authData, formVal);

    }


    sendData = (authData, formVal) => {
        if (formVal) {
            this.props.register(authData);
            this.props.history.push('/')
        }
    }

    render() {
        const {t} = this.props;
        return (
            <div className="loginwindow">
                <div className="container">
                    <div className="navigation">
                        <Nav/>
                    </div>
                    <div className="loginform">
                        <h1>{t('signup.title')}</h1>
                        <img src={decoration} alt="decoration"/>
                        <div className="form" style={{height: '60%'}}>
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
                                        {t('signup.password')}
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
                                    <label htmlFor="password">
                                        {t('signup.reppass')}
                                        <input
                                            style={{borderColor: (this.state.repeatedPasswordValid === false || this.state.repeatedPasswordValid === null) && this.state.showWarnings ? 'red' : 'gray'}}
                                            type="password" id="repeatedPassword" name="repeatedPassword"
                                            onChange={(event) => this.handleUserInput(event)}
                                            value={this.state.repeatedPassword}/>
                                        <div className="panel panel-default"
                                             style={{visibility: this.state.showWarnings ? 'visible' : 'hidden'}}>
                                            <FormErrors formErrors={this.state.formErrors.repeatedPassword}/>
                                        </div>
                                    </label>
                                </div>
                                <div className="buttons">
                                    <Link2 className="changeaction" to="/logowanie">{t('signup.login')}</Link2>
                                    <button type="submit" className="submit">{t('signup.signin')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Register = withTranslation()(Register1);
export default Register;