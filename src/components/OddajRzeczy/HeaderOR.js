import React from "react";
import decoration from '../../assets/Decoration.svg';
import header from '../../assets/Form-Hero-Image.jpg'
import Nav from "../Nav";
import {withTranslation} from 'react-i18next';

export class HeaderOR1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {t} = this.props;
        return (
            <div className="headerOR">
                <div className='headerLayer'/>
                <div className="container">
                    <div className="rest">
                        <div className="upbar">
                            <Nav isAuth={this.props.isAuth} user={this.props.user}/>
                        </div>
                        <div className="title">
                            <h1>{t('headerOR.title')} <br/>{t('headerOR.title2')}</h1>
                            <img src={decoration} alt="decoration"/>
                        </div>
                        <div className="action">
                            <h1>{t('headerOR.4steps')}</h1>
                            <div className="steps">
                                <div className="weirdStep firstStep">
                                    <div className="stepContent">
                                        <h2>1</h2>
                                        <p>{t('headerOR.1')}</p>
                                    </div>
                                </div>
                                <div className="weirdStep">
                                    <div className="stepContent">
                                        <h2>2</h2>
                                        <p>{t('headerOR.2')}</p>
                                    </div>
                                </div>
                                <div className="weirdStep">
                                    <div className="stepContent">
                                        <h2>3</h2>
                                        <p>{t('headerOR.3')}</p>
                                    </div>
                                </div>
                                <div className="weirdStep">
                                    <div className="stepContent">
                                        <h2>4</h2>
                                        <p>{t('headerOR.4')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const HeaderOR = withTranslation()(HeaderOR1);
export default HeaderOR;