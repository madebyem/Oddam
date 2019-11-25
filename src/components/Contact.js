import React from "react";
import decoration from "../assets/Decoration.svg";
import SvgFacebook from "../Icons/Facebook";
import SvgInstagram from "../Icons/Instagram";
import FormErrors from "./FormErrors";
import {withTranslation} from 'react-i18next';


export class Contact1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            formErrors: {name: '', email: '', message: ''},
            emailValid: "",
            nameValid: "",
            messageValid: "",
            sent: false,
        }
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let messageValid = this.state.messageValid;
        let nameValid = this.state.nameValid;
        const {t} = this.props;

        switch (fieldName) {
            case 'email':
                emailValid = (value.length > 0 && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
                fieldValidationErrors.email = emailValid ? '' : `${t("contact.erremail")}`;
                break;
            case 'message':
                messageValid = value.length >= 120;
                fieldValidationErrors.message = messageValid ? '' : `${t("contact.errmess")}`;
                break;
            case 'name':
                nameValid = (value.split(" ").length < 3 && value.length > 0);
                fieldValidationErrors.name = nameValid ? '' : `${t("contact.errname")}`;
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid,
            messageValid: messageValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.messageValid});
    }

    SendMessage = (e) => {
        const axios = require('axios');
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        axios.post('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            "Content-Type": "application/json",
            name: name,
            email: email,
            message: message,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({
            sent: true,
            name: "",
            email: "",
            message: "",
        }, this.clearForm())
    };
    clearForm() {
        this.setState({
            name: "",
            email: "",
            message: "",
        });
    }

    render() {
        const {t} = this.props;
        return (
            <div className="contact" name="kontakt" id='kontakt'>
                <div className="container">
                    <div className="firstagain">
                        <div className="form">
                            <h1>{t('contact.title')}</h1>
                            <img src={decoration} alt="decoration"/>
                            <div className="sent" style={{visibility: this.state.sent ? "visible" : "hidden"}}>
                                <p>{t('contact.sent')}</p>
                                <p>{t('contact.sent2')}</p>
                            </div>
                            <form onSubmit={this.SendMessage}>
                                <div className="first">
                                    <label htmlFor="name">
                                        {t('contact.name')}
                                        <input style={{borderColor: this.state.nameValid === false ? 'red' : 'gray'}}
                                               type="text" placeholder="Krzysztof" id="name" name="name"
                                               value={this.state.name}
                                               onChange={(event) => this.handleUserInput(event)}/>
                                        <div className="panel panel-default">
                                            <FormErrors formErrors={this.state.formErrors.name}/>
                                        </div>
                                    </label>

                                    <label htmlFor="e-mail">
                                        {t('contact.email')}
                                        <input
                                            style={{borderColor: this.state.emailValid === false || this.state.emailValid === null ? 'red' : 'gray'}}
                                            type="e-mail" id="email" name="email"
                                            onChange={(event) => this.handleUserInput(event)} placeholder="abc@xyz.pl"
                                            value={this.state.email}/>
                                        <div className="panel panel-default">
                                            <FormErrors formErrors={this.state.formErrors.email}/>
                                        </div>
                                    </label>

                                </div>
                                <div className="second">
                                    <label className='textarealabel' htmlFor="message">
                                        {t('contact.mess')}
                                        <textarea
                                            style={{borderColor: this.state.messageValid === false ? 'red' : 'gray'}}
                                            id="message" name="message" value={this.state.message}
                                            onChange={(event) => this.handleUserInput(event)}
                                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                                        <div className="panel panel-default">
                                            <FormErrors formErrors={this.state.formErrors.message}/>
                                        </div>
                                    </label>
                                </div>
                                <div className="btn">
                                    <button className={`submitbtn ${this.state.formValid ? 'active' : ''}`}
                                            type="submit" disabled={!this.state.formValid}>{t('contact.btn')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="footer">

                        <p>Copyright by Coders Lab</p>
                        <div className="icons"><SvgFacebook className="fb"/>
                            <SvgInstagram className="insta"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const Contact = withTranslation()(Contact1);
export default Contact;