import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'rc-time-picker/assets/index.css';
import TextField from '@material-ui/core/TextField';
import SvgIcon1 from "../../Icons/Icon1";
import SvgIcon4 from "../../Icons/Icon4";
import decoration from "../../assets/Decoration.svg";
import {withTranslation} from 'react-i18next';


const {postcodeValidator} = require('postcode-validator');

export class FormOR1 extends React.Component {
    constructor(props) {
        super(props)
        const {t} = this.props;
        this.state = {
            warnings: [`${t("formOR.info1")}`,
                `${t("formOR.info2")}`,
                `${t("formOR.info3")}`, `${t("formOR.info4")}`],
            step: 1,
            stuff: "",
            bags: "",
            location: "",
            orgName: "",
            helpFor: [],
            address: {
                street: "",
                city: "",
                postCode: "",
                phone: "",
                date: "",
                time: "",
                note: ""
            },
            streetValid: "",
            cityValid: "",
            postCodeValid: "",
            phoneValid: "",
            dateValid: "",
            timeValid: "",
            formValid: "",
        }
    }

    changeStep = (direction) => {
        this.setState({
            step: this.state.step + direction
        })
    };
    saveForm1 = (e) => {
        this.setState({
            stuff: e.target.value,
        })
    };

    saveForm2 = (e) => {
        this.setState({
            bags: e.target.value,
        })
    };

    saveForm3 = (e) => {
        if (e.target.type === 'select-one' || e.target.type === "text") {
            this.setState({
                [e.target.name]: e.target.value,
            })
        } else {
            let copy = [...this.state.helpFor];
            if (!copy.includes(e.target.name)) {
                copy = [...copy, e.target.name]
            } else {
                copy = copy.filter(el => el !== e.target.name);
            }
            this.setState({
                helpFor: [...copy]
            })
        }
    };

    saveForm4 = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let address = {...this.state.address}
        address = {
            ...address,
            [name]: value
        };
        this.setState({
            address: {...address},
        }, () => {
            this.validateField(name, value)
        })
    };

    validateField(fieldName, value) {
        let streetValid = this.state.streetValid;
        let cityValid = this.state.cityValid;
        let postCodeValid = this.state.postCodeValid;
        let phoneValid = this.state.phoneValid;
        let dateValid = this.state.dateValid;
        let timeValid = this.state.timeValid;

        switch (fieldName) {
            case 'street':
                streetValid = value.length >= 2 && typeof value === 'string';
                break;
            case 'city':
                cityValid = value.length >= 2 && typeof value === 'string';
                break;
            case 'postCode':
                const code = value.toString();
                postCodeValid = postcodeValidator(code, 'PL');
                break;
            case 'phone':
                var phoneno = /^\d{9}$/;
                if (value.match(phoneno)) {
                    phoneValid = true;
                } else {
                    phoneValid = false
                }
                break;
            case 'date':
                dateValid = (value !== null && value !== undefined && value !== "")
                break;
            case 'time':
                timeValid = (value !== null && value !== undefined && value !== "")
                break;
            default:
                break;
        }
        this.setState({
            streetValid: streetValid,
            cityValid: cityValid,
            postCodeValid: postCodeValid,
            phoneValid: phoneValid,
            dateValid: dateValid,
            timeValid: timeValid
        }, this.validateForm);
    }

    validateForm = () => {
        this.setState({formValid: this.state.streetValid && this.state.cityValid && this.state.postCodeValid && this.state.phoneValid && this.state.dateValid && this.state.timeValid});

    };

    setDate = (date) => {
        const name = 'date';
        const value = date;
        let address = {...this.state.address};
        address = {
            ...address,
            date: date
        };
        this.setState({
            address: {...address},
        }, () => {
            this.validateField(name, value)
        })
    };

    setTime = (time) => {
        const name = 'time';
        const value = time;
        let address = {...this.state.address};
        address = {
            ...address,
            time: time
        };
        this.setState({
            address: {...address},
        }, () => {
            this.validateField(name, value)
        })
    };

    sendData = () => {
        const request = {
            type: this.state.stuff,
            bags: this.state.bags,
            localization: this.state.location,
            helpGroups: this.state.helpFor,
            localizationSpecific: this.state.orgName,
            address: this.state.address,
            user: {
                email: this.props.email,
                userId: this.props.userId,
                token: this.props.token,
            }
        };
        this.props.sendRequest(this.props.token, request);
        this.changeStep(1);
        this.clearState();
    };

    clearState = () => {
        this.setState({
            stuff: "",
            bags: "",
            location: "",
            orgName: "",
            helpFor: [],
            address: {
                street: "",
                city: "",
                postCode: "",
                phone: "",
                date: "",
                time: "",
                note: ""
            },
            streetValid: "",
            cityValid: "",
            postCodeValid: "",
            phoneValid: "",
            dateValid: "",
            timeValid: "",
            formValid: "",
        })
    };


    render() {
        const {t} = this.props;
        return (
            <div className="formOR">
                <div className="infobar" style={{display: this.state.step < 5 ? "initial" : "none"}}>
                    <div className="container">
                        <div className="warnings">
                            <h1>{t('formOR.important')}</h1>
                            <p>{this.state.warnings[this.state.step - 1]}</p>
                        </div>
                    </div>
                </div>
                <div className="formEl">
                    <div className="container">
                        <div className="form">
                            <h2 style={{display: this.state.step < 5 ? "initial" : "none"}}>{t('formOR.step')} {this.state.step}/4</h2>
                            {this.state.step === 1 ?
                                <form className="form1" onChange={this.saveForm1}>
                                    <h1>{t('formOR.1')}</h1>
                                    <label>
                                        <input
                                            defaultChecked={this.state.stuff === `${t("formOR.11v")}`}
                                            value={`${t("formOR.11v")}`}
                                            name="stuff"
                                            type="radio"
                                        />
                                        {t('formOR.11')}
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                            defaultChecked={this.state.stuff === `${t("formOR.12v")}`}
                                            value={`${t("formOR.12v")}`}
                                            name="stuff"
                                            type="radio"
                                        />
                                        {t('formOR.12')}
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                            defaultChecked={this.state.stuff === `${t("formOR.13")}`}
                                            name="stuff"
                                            value={`${t("formOR.13")}`}
                                            type="radio"
                                        />
                                        {t('formOR.13')}
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                            defaultChecked={this.state.stuff === `${t("formOR.14")}`}
                                            value={`${t("formOR.14")}`}
                                            name="stuff"
                                            type="radio"
                                        />
                                        {t('formOR.14')}
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                            defaultChecked={this.state.stuff === `${t("formOR.15v")}`}
                                            value={`${t("formOR.15v")}`}
                                            name="stuff"
                                            type="radio"

                                        />
                                        {t('formOR.15')}
                                    </label>
                                    <br/>
                                    <div className="nextprev">
                                        {this.state.step === 1 ? null : <button onClick={() => this.changeStep(-1)}
                                                                                className="changestep">{t('formOR.wstecz')}</button>}
                                        <button onClick={() => this.changeStep(1)}
                                                disabled={this.state.stuff === null || this.state.stuff === "" || this.state.stuff === undefined}
                                                type="submit" className="changestep">{t('formOR.dalej')}</button>
                                    </div>
                                </form>
                                : this.state.step === 2 ?
                                    <form className="form2" onChange={this.saveForm2}><h1>{t('formOR.2')}</h1>
                                        <label>
                                            {t('formOR.21')}<br/>
                                            <select defaultValue={this.state.bags} name='select'>
                                                <option value={""}>{t('formOR.choose')}</option>
                                                <option name="1" value="1">1</option>
                                                <option name="2" value="2">2</option>
                                                <option name="3" value="3">3</option>
                                                <option name="4" value="4">4</option>
                                                <option name="5" value="5">5</option>
                                            </select>
                                        </label>
                                        <br/>
                                        <div className="nextprev">
                                            {this.state.step === 1 ? null : <button onClick={() => this.changeStep(-1)}
                                                                                    className="changestep">{t('formOR.wstecz')}</button>}
                                            <button
                                                disabled={this.state.bags === null || this.state.bags === "" || this.state.bags === undefined}
                                                onClick={() => this.changeStep(1)}
                                                className="changestep">{t('formOR.dalej')}</button>
                                        </div>
                                    </form>
                                    : this.state.step === 3 ? <form className="form3" onChange={this.saveForm3}>
                                            <h1>{t('formOR.3')}</h1>
                                            <label>
                                                <select name="location" defaultValue={this.state.location}
                                                        style={{marginLeft: 0}}>
                                                    <option value={""}> {t('formOR.choose')}</option>
                                                    <option value="Poznań">Poznań</option>
                                                    <option value="Warszawa">Warszawa</option>
                                                    <option value="Kraków">Kraków</option>
                                                    <option value="Wrocław">Wrocław</option>
                                                    <option value="Katowice">Katowice</option>
                                                </select>
                                            </label>
                                            <br/>
                                            <h4>{t('formOR.3who')}</h4>
                                            <div className="helpfor">
                                                <label className="komu">
                                                    <input
                                                        defaultChecked={this.state.helpFor.includes(`${t("formOR.31")}`)}
                                                        name={`${t("formOR.31")}`}
                                                        type="checkbox"
                                                        title={`${t("formOR.31")}`}

                                                    />
                                                    <div>{t('formOR.31')}</div>
                                                </label>
                                                <br/>
                                                <label className="komu">
                                                    <input
                                                        defaultChecked={this.state.helpFor.includes(`${t("formOR.32")}`)}
                                                        name={`${t("formOR.32")}`}
                                                        type="checkbox"
                                                    />
                                                    <div>{t('formOR.32')}</div>
                                                </label>
                                                <br/>
                                                <label className="komu">
                                                    <input
                                                        defaultChecked={this.state.helpFor.includes(`${t("formOR.33")}`)}
                                                        name={`${t("formOR.33")}`}
                                                        type="checkbox"
                                                    />
                                                    <div>{t('formOR.33')}</div>
                                                </label>
                                                <br/><br/>
                                                <label className="komu">
                                                    <input
                                                        defaultChecked={this.state.helpFor.includes(`${t("formOR.34")}`)}
                                                        name={`${t("formOR.34")}`}
                                                        type="checkbox"

                                                    />
                                                    <div>{t('formOR.34')}</div>

                                                </label>
                                                <br/>
                                                <label className="komu">
                                                    <input
                                                        defaultChecked={this.state.helpFor.includes(`${t("formOR.35")}`)}
                                                        name={`${t("formOR.35")}`}
                                                        type="checkbox"

                                                    />
                                                    <div>{t('formOR.35')}</div>
                                                </label>
                                                <br/>
                                            </div>

                                            <h4>{t('formOR.org')}</h4>
                                            <label><input type="text" className="orgName" name="orgName"
                                                          value={this.state.orgName}/></label>
                                            <div className="nextprev">
                                                {this.state.step === 1 ? null : <button onClick={() => this.changeStep(-1)}
                                                                                        className="changestep">{t('formOR.wstecz')}</button>}
                                                <button
                                                    disabled={!(this.state.helpFor.length !== 0 && (this.state.orgName !== "" || this.state.location !== ""))}
                                                    onClick={() => this.changeStep(1)}
                                                    className="changestep">{t('formOR.dalej')}</button>
                                            </div>
                                        </form>
                                        : this.state.step === 4 ? <form className="form4" onChange={this.saveForm4}>
                                                <h1>{t('formOR.4')}</h1>
                                                <div className="columns">
                                                    <div className="adres">
                                                        <p>{t('formOR.address')}</p>
                                                        <label>
                                                            {t('formOR.str')}
                                                            <input
                                                                value={this.state.address.street}
                                                                name="street"
                                                                type="text"
                                                                style={{borderColor: this.state.streetValid === false ? "red" : "#3C3C3C"}}

                                                            />

                                                        </label>
                                                        <br/>
                                                        <label>
                                                            {t('formOR.city')}
                                                            <input
                                                                value={this.state.address.city}
                                                                name="city"
                                                                type="text"
                                                                style={{borderColor: this.state.cityValid === false ? "red" : "#3C3C3C"}}

                                                            />
                                                        </label>
                                                        <br/>
                                                        <label>
                                                            {t('formOR.code')}<br/>{t('formOR.code2')}
                                                            <input
                                                                value={this.state.address.postCode}
                                                                name="postCode"
                                                                type="text"
                                                                style={{borderColor: this.state.postCodeValid === false ? "red" : "#3C3C3C"}}

                                                            />
                                                        </label>
                                                        <br/>
                                                        <label>
                                                            {t('formOR.phone')}<br/>{t('formOR.number')}
                                                            <input
                                                                value={this.state.address.phone}
                                                                name="phone"
                                                                type="text"
                                                                style={{borderColor: this.state.phoneValid === false ? "red" : "#3C3C3C"}}

                                                            />

                                                        </label>
                                                        <br/>
                                                    </div>
                                                    <div className="time">
                                                        <p>{t('formOR.termin')}</p>
                                                        <label>
                                                            {t('formOR.date')}
                                                            <DatePicker
                                                                dateFormat='dd/MM/yyyy'
                                                                selected={this.state.address.date}
                                                                onChange={this.setDate}
                                                                style={{borderColor: this.state.dateValid === false ? "red" : "#3C3C3C"}}
                                                            />
                                                        </label>
                                                        <br/>
                                                        <label>
                                                            {t('formOR.hour')}
                                                            <TextField
                                                                name="time"
                                                                id="time"
                                                                type="time"
                                                                defaultValue={this.state.address.time}
                                                                onChange={this.setTime}
                                                                style={{borderColor: this.state.timeValid === false ? "red" : "#3C3C3C"}}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                                inputProps={{
                                                                    step: 1800,
                                                                }}
                                                            />
                                                        </label>
                                                        <label className="textarea">
                                                            {t('formOR.notes')}<br/>{t('formOR.notes2')}
                                                            <textarea
                                                                value={this.state.address.note}
                                                                name="note"
                                                            />

                                                        </label>
                                                        <br/>
                                                    </div>
                                                </div>
                                                <div className="nextprev">
                                                    {this.state.step === 1 ? null :
                                                        <button onClick={() => this.changeStep(-1)}
                                                                className="changestep">{t('formOR.wstecz')}</button>}
                                                    <button disabled={!this.state.formValid}
                                                            onClick={() => this.changeStep(1)}
                                                            className="changestep">{t('formOR.dalej')}</button>
                                                </div>

                                            </form>
                                            : this.state.step === 5 ?
                                                <div className="podsumowanie">
                                                    <h1>{t('formOR.5')}</h1>
                                                    <h2>{t('formOR.a')}</h2>
                                                    <div className="what">
                                                        <SvgIcon1 className="icon"/>
                                                        <p>{this.state.bags} {t('formOR.c')}, {this.state.stuff}{this.state.helpFor.map(type => `, ${type}`)}</p>
                                                    </div>
                                                    <div className="town">
                                                        <SvgIcon4 className="icon"/>
                                                        <p>{t('formOR.b')} {this.state.location} {this.state.orgName}</p>
                                                    </div>
                                                    <div className="pickUp">
                                                        <div className="where">
                                                            <h2>{t('formOR.address')}</h2>
                                                            <div className="item"><p>{t('formOR.str')}</p>
                                                                <span>{this.state.address.street}</span></div>
                                                            <div className="item"><p>{t('formOR.city')} </p>
                                                                <span>{this.state.address.city}</span></div>
                                                            <div className="item"><p>{t('formOR.code')}
                                                                <br/>{t('formOR.code2')} </p>
                                                                <span>{this.state.address.postCode}</span></div>
                                                            <div className="item"><p>{t('formOR.phone')}
                                                                <br/>{t('formOR.number')}</p>
                                                                <span>{this.state.address.phone}</span></div>
                                                        </div>
                                                        <div className="when">
                                                            <h2>{t('formOR.termin')}</h2>
                                                            <div className="item"><p>{t('formOR.date')}</p>
                                                                <span>{this.state.address.date.toLocaleDateString()}</span>
                                                            </div>
                                                            <div className="item"><p>{t('formOR.hour')} </p>
                                                                <span>{this.state.address.time}</span></div>
                                                            <div className="item"><p>{t('formOR.notes')}
                                                                <br/>{t('formOR.notes2')} </p>
                                                                <span>{this.state.address.note}</span></div>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <div className="nextprev">
                                                        {this.state.step === 1 ? null :
                                                            <button onClick={() => this.changeStep(-1)}
                                                                    className="changestep">{t('formOR.wstecz')}</button>}
                                                        <button onClick={this.sendData}
                                                                className="changestep">{t('formOR.pot')}</button>
                                                    </div>
                                                </div>

                                                : <div className="podziekowanie">
                                                    <div className="thanks">
                                                        <h1>{t('formOR.thanks')}<br/> {t('formOR.thanks2')} </h1>
                                                    <img src={decoration} alt="decoration"/></div>
                                                </div>}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const FormOR = withTranslation()(FormOR1);
export default FormOR;
