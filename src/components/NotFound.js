import React from "react";
import Nav from "./Nav";
import decoration from "../assets/Decoration.svg";
import Link2 from "react-router-dom/Link";
import {useTranslation} from 'react-i18next';


function NotFound() {
    const {t, i18n} = useTranslation();

    return (
        <div className="loginwindow">
            <div className="container">
                <div className="navigation">
                    <Nav/>
                </div>
                <div className="loginform">
                    <h1 style={{
                        textAlign: "center",
                        width: "50%",
                        lineHeight: '2.25rem',
                        top: '12.75rem'
                    }}>{t('notFound.title')}</h1>
                    <img style={{top: '18.25rem '}} src={decoration} alt="decoration"/>
                    <Link2 className="gobacklink" to="/">
                        <button className="goback">{t('notFound.btn')}</button>
                    </Link2>
                </div>
            </div>
        </div>
    )
}

export default NotFound;