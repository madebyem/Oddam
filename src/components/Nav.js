import React from "react";
import Link2 from "react-router-dom/Link";
import {HashLink} from 'react-router-hash-link';
import i18n from "i18next";
import {withTranslation} from 'react-i18next';

export class Nav1 extends React.Component {
    render() {
        const {t} = this.props;
        return (
            <>
                {!this.props.isAuth ?
                    <div className="login">
                        <div className="languages">
                            <button className="langBut" onClick={() => i18n.changeLanguage('pl_PL')}>pl</button>
                            <button className="langBut" onClick={() => i18n.changeLanguage('en_US')}>en</button>
                        </div>
                        <div className="loginstuff">
                            <Link2 className="loginlink" to="/logowanie">{t('nav.login')}</Link2>
                            <Link2 className="loginlink" to="/rejestracja">
                                <button>{t('nav.signin')}</button>
                            </Link2></div>

                    </div>
                    :

                    <div className="login">
                        <div className="languages">
                            <button className="langBut" onClick={() => i18n.changeLanguage('pl_PL')}>pl</button>
                            <button className="langBut" onClick={() => i18n.changeLanguage('en_US')}>en</button>
                        </div>
                        <div className="loginstuff">
                            <p>{t('nav.hi')} {this.props.user}!</p>
                            <Link2 className="loginlink" to="/oddaj-rzeczy">
                                <button>{t('nav.give')}</button>
                            </Link2>
                            <Link2 className="loginlink" to="/wylogowano">{t('nav.logout')}</Link2>
                        </div>
                    </div>}


                <div className="nav">
                    <Link2 className="navlink" to="/">
                        <button>Start</button>
                    </Link2>
                    <HashLink smooth={true} className="navlink nobut" to="/#steps">{t('nav.what')}</HashLink>
                    <HashLink smooth={true} className="navlink nobut" to="/#onas">{t('nav.aboutus')}</HashLink>
                    <HashLink smooth={true} className="navlink nobut" to="/#komu">{t('nav.fund')}</HashLink>
                    <HashLink smooth={true} className="navlink nobut" to="/#kontakt">{t('nav.contact')}</HashLink>
                </div>
            </>
        )
    }
}

const Nav = withTranslation()(Nav1);
export default Nav;