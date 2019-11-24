import React from "react";
import {Link} from "react-router-dom"
import decoration from '../assets/Decoration.svg'
import Nav from "./Nav";
import {withTranslation} from 'react-i18next';


export class HomeHeader1 extends React.Component {
    render() {
        const {t} = this.props;
        return (

            <div className="header">
                <div className="container">
                    <div className="rest">
                        <Nav classname="navEl" isAuth={this.props.isAuth} user={this.props.user}/>
                        <div className="title">
                            <h1>{t('header.1')}</h1>
                            <h1>{t('header.2')}</h1>
                            <img src={decoration} alt="decoration"/>

                        </div>
                        <div className="action">
                            <Link to="/oddaj-rzeczy">
                                <button>{t('header.button1')}<br/>{t('header.button12')}</button>
                            </Link>
                            <Link to="/logowanie">
                                <button>{t('header.button2')}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const HomeHeader = withTranslation()(HomeHeader1);
export default HomeHeader;