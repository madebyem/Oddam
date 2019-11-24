import React from "react";
import Nav from "./Nav";
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import {useTranslation} from 'react-i18next';


function NotFound() {
    const {t} = useTranslation();

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
                    <Link className="gobacklink" to="/">
                        <button className="goback">{t('notFound.btn')}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;