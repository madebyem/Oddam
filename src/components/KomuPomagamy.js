import React from "react";
import decoration from "../assets/Decoration.svg";
import Fundations from "./Fundations";
import Organisations from "./Organisations";
import Locals from "./Locals";
import {withTranslation} from 'react-i18next';


export class KomuPomagamy1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            who: 1,
        }
    }

    WeHelp = (who) => {
        this.setState({
            who: parseInt(who),
        })
    };

    render() {
        const {t} = this.props;
        return (
            <div className="komupomagamy" name="komupomagamy" id='komupomagamy'>
                <div className="container">
                    <div className="category">
                        <h1>{t('komu.title')}</h1>
                        <img src={decoration} alt="decoration"/>
                        <div className="buttons">
                            <button className={`btn ${this.state.who === 1 ? 'thisone' : ''}`}
                                    onClick={() => this.WeHelp(1)}>{t('komu.fund')}</button>
                            <button className={`btn ${this.state.who === 2 ? 'thisone' : ''}`}
                                    onClick={() => this.WeHelp(2)}>{t('komu.org')}</button>
                            <button className={`btn ${this.state.who === 3 ? 'thisone' : ''}`}
                                    onClick={() => this.WeHelp(3)}>{t('komu.loc')}</button>
                        </div>
                    </div>
                    <div className="changing">
                        {this.state.who === 1 ? <Fundations/> : this.state.who === 2 ? <Organisations/> : <Locals/>}
                    </div>
                </div>
            </div>
        )
    }
}

const KomuPomagamy = withTranslation()(KomuPomagamy1);
export default KomuPomagamy;