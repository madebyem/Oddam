import React from "react";
import {Link} from 'react-router-dom';
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
                            <Link className="loginlink" to="/logowanie">{t('nav.login')}</Link>
                            <Link className="loginlink" to="/rejestracja">
                                <button>{t('nav.signin')}</button>
                            </Link></div>

                    </div>
                    :

                    <div className="login">
                        <div className="languages">
                            <button className="langBut" onClick={() => i18n.changeLanguage('pl_PL')}>pl</button>
                            <button className="langBut" onClick={() => i18n.changeLanguage('en_US')}>en</button>
                        </div>
                        <div className="loginstuff">
                            <p>{t('nav.hi')} {this.props.user}!</p>
                            <Link className="loginlink" to="/oddaj-rzeczy">
                                <button>{t('nav.give')}</button>
                            </Link>
                            <Link className="loginlink" to="/wylogowano">{t('nav.logout')}</Link>
                        </div>
                    </div>}


                <div className="nav">
                    <Link className="navlink" to="/">
                        <button>Start</button>
                    </Link>
                    <HashLink smooth={true} className="navlink nobut" to="/#kroki">{t('nav.what')}</HashLink>
                    <HashLink smooth={true} className="navlink nobut" to="/#onas">{t('nav.aboutus')}</HashLink>
                    <HashLink smooth={true} className="navlink nobut" to="/#komupomagamy">{t('nav.fund')}</HashLink>
                    <HashLink smooth={true} className="navlink nobut" to="/#kontakt">{t('nav.contact')}</HashLink>
                </div>
            </>
        )
    }
}

const Nav = withTranslation()(Nav1);
export default Nav;