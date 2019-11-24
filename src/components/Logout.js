import React from "react";
import Nav from "./Nav";
import decoration from "../assets/Decoration.svg";
import Link2 from "react-router-dom/Link";
import {withTranslation} from 'react-i18next';


export class Logout1 extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.logout();
    };

    render() {
        const {t} = this.props;
        return (
            <div className="loginwindow">
                <div className="container">
                    <div className="navigation">
                        <Nav/>
                    </div>
                    <div className="loginform">
                        <h1 style={{
                            textAlign: "center",
                            lineHeight: '2.25rem',
                            top: '12.75rem'
                        }}>{t('logout.title')}</h1>
                        <img style={{top: '18.25rem '}} src={decoration} alt="decoration"/>
                        <Link2 className="gobacklink" to="/">
                            <button className="goback">{t('logout.btn')}</button>
                        </Link2>
                    </div>
                </div>
            </div>
        )
    }
}

const Logout = withTranslation()(Logout1);
export default Logout;