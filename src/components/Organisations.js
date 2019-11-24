import React from "react";
import {withTranslation} from 'react-i18next';


export class Organisations1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        }
    }

    ChangePage = (page) => {
        this.setState({
            page: parseInt(page)
        })
    };


    render() {
        const {t} = this.props;
        const page1 = <div className="page1">
            <div className="fundEl">
                <div className="description">
                    <h3>{t('org.1')}</h3>
                    <p>{t('org.11')}</p>
                </div>
                <div className="items"><p>{t('org.12')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('org.2')}</h3>
                    <p>{t('org.21')}</p>
                </div>
                <div className="items"><p>{t('org.22')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('org.3')}</h3>
                    <p>{t('org.31')}</p>
                </div>
                <div className="items"><p>{t('org.32')}</p>
                </div>
            </div>
        </div>
        const page2 = <div className="page2">
            <div className="fundEl">
                <div className="description">
                    <h3>{t('org.4')}</h3>
                    <p>{t('org.41')}</p>
                </div>
                <div className="items"><p>{t('org.42')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('org.5')}</h3>
                    <p>{t('org.51')}</p>
                </div>
                <div className="items"><p>{t('org.52')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('org.6')}</h3>
                    <p>{t('org.61')}</p>
                </div>
                <div className="items"><p>{t('org.62')}</p>
                </div>
            </div>
        </div>


        return (
            <div className="fundations">
                <div className="desc">
                    <h2> {t('org.desc')}</h2></div>
                <div className="page">
                    {this.state.page === 1 ? page1 : page2}

                </div>
                <div className="buttons">
                    <button className={`pagebtn ${this.state.page === 1 ? 'active' : ''}`}
                            onClick={() => this.ChangePage(1)}>1
                    </button>
                    <button className={`pagebtn ${this.state.page === 2 ? 'active' : ''}`}
                            onClick={() => this.ChangePage(2)}>2
                    </button>
                    <button style={{visibility: "hidden"}}
                            className={`pagebtn ${this.state.page === 3 ? 'active' : ''}`}
                            onClick={() => this.ChangePage(3)}>3
                    </button>
                </div>
            </div>
        )
    }
}

const Organisations = withTranslation()(Organisations1);
export default Organisations;