import React from "react";
import decoration from "../assets/Decoration.svg";
import SvgSignature from "../Icons/Signature";
import people from "../assets/People.jpg";
import {useTranslation} from 'react-i18next';

function Onas() {
    const {t, i18n} = useTranslation();
    return (
        <div className="onas" name="onas" id='onas'>
            <div className="container">
                <div className="info">
                    <h1>{t('aboutus.title')}</h1>
                    <img src={decoration} alt="decoration"/>
                    <h2>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.</h2>
                    <SvgSignature style={{alignSelf: 'flex-end'}}/>
                </div>
            </div>
        </div>
    )
}

export default Onas;