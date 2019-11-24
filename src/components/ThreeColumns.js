import React from "react";
import {useTranslation} from 'react-i18next';

function ThreeColumns() {

    const {t} = useTranslation();
    return (
        <div className="threecolumns">
            <div className="container">
                <div className="stat">
                    <h1>10</h1>
                    <p>{t('columns.bags')}</p>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit
                        viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="stat">
                    <h1>5</h1>
                    <p>{t('columns.org')}</p>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit
                        viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="stat">
                    <h1>7</h1>
                    <p>{t('columns.colect')}</p>
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit
                        viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>

        </div>
    )

}


export default ThreeColumns;