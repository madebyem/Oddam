import React from "react";
import decoration from "../assets/Decoration.svg";
import SvgIcon1 from "../Icons/Icon1";
import SvgIcon2 from "../Icons/Icon2";
import SvgIcon3 from "../Icons/Icon3";
import SvgIcon4 from "../Icons/Icon4";
import {Link} from "react-router-dom";
import {useTranslation} from 'react-i18next';

function Steps() {
    const {t} = useTranslation();
    return (
        <div className="steps" name="kroki" id='kroki'>
            <div className="title">
                <div className="container1">
                    <h1>{t('steps.4steps')}</h1>
                    <img src={decoration} alt="decoration"/>
                </div>
            </div>
            <div className="threesteps">
                <div className="container">
                    <div className="step">
                        <SvgIcon1 className="stepIcon"/>

                        <h4>{t('steps.1')}</h4>
                        <hr style={{
                            color: 'black',
                            width: 60, marginTop: '5px', marginBottom: '5px'
                        }}/>
                        <p>{t('steps.11')}</p>
                    </div>
                    <div className="step">
                        <SvgIcon2 className="stepIcon"/>
                        <h4>{t('steps.2')}</h4>
                        <hr style={{
                            color: 'black',
                            width: 60, marginTop: '5px', marginBottom: '5px'
                        }}/>
                        <p>{t('steps.21')}</p>
                    </div>
                    <div className="step">
                        <SvgIcon3 className="stepIcon"/>
                        <h4>{t('steps.3')}</h4>
                        <hr style={{
                            color: 'black',
                            width: 60, marginTop: '5px', marginBottom: '5px'
                        }}/>
                        <p>{t('steps.31')}</p>
                    </div>
                    <div className="step">
                        <SvgIcon4 className="stepIcon"/>
                        <h4>{t('steps.4')}</h4>
                        <hr style={{
                            color: 'black',
                            width: 60, marginTop: '5px', marginBottom: '5px'
                        }}/>
                        <p>{t('steps.41')}</p>
                    </div>
                </div>
            </div>
            <div className="link">
                <div className="container">
                    <Link to="/oddaj-rzeczy">
                        <button>{t('steps.button')}</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Steps;