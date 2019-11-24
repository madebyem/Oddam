import React from "react";
import {withTranslation} from 'react-i18next';


export class Fundations1 extends React.Component {
    constructor(props) {
        super(props)
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
                    <h3>{t('fund.1')}</h3>
                    <p>{t('fund.11')}</p>
                </div>
                <div className="items"><p>{t('fund.12')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('fund.2')}</h3>
                    <p>{t('fund.21')}</p>
                </div>
                <div className="items"><p>{t('fund.22')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('fund.3')}</h3>
                    <p>{t('fund.31')}</p>
                </div>
                <div className="items"><p>{t('fund.32')}</p>
                </div>
            </div>
        </div>
        const page2 = <div className="page2">
            <div className="fundEl">
                <div className="description">
                    <h3>{t('fund.4')}</h3>
                    <p>{t('fund.41')}</p>
                </div>
                <div className="items"><p>{t('fund.42')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('fund.5')}</h3>
                    <p>{t('fund.51')}</p>
                </div>
                <div className="items"><p>{t('fund.52')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('fund.6')}</h3>
                    <p>{t('fund.61')}</p>
                </div>
                <div className="items"><p>{t('fund.62')}</p>
                </div>
            </div>
        </div>

        const page3 = <div className="page3">
            <div className="fundEl">
                <div className="description">
                    <h3>{t('fund.7')}</h3>
                    <p>{t('fund.71')}</p>
                </div>
                <div className="items"><p>{t('fund.72')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('fund.8')}</h3>
                    <p>{t('fund.81')}</p>
                </div>
                <div className="items"><p>{t('fund.82')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('fund.9')}</h3>
                    <p>{t('fund.91')}</p>
                </div>
                <div className="items"><p>{t('fund.92')}</p>
                </div>
            </div>
        </div>
        return (
            <div className="fundations">
                <div className="desc">
                    <h2> {t('fund.desc')}</h2></div>
                <div className="page">
                    {this.state.page === 1 ? page1 : this.state.page === 2 ? page2 : page3}

                </div>
                <div className="buttons">
                    <button className={`pagebtn ${this.state.page === 1 ? 'active' : ''}`}
                            onClick={() => this.ChangePage(1)}>1
                    </button>
                    <button className={`pagebtn ${this.state.page === 2 ? 'active' : ''}`}
                            onClick={() => this.ChangePage(2)}>2
                    </button>
                    <button className={`pagebtn ${this.state.page === 3 ? 'active' : ''}`}
                            onClick={() => this.ChangePage(3)}>3
                    </button>
                </div>
            </div>


        )
    }
}


const Fundations = withTranslation()(Fundations1);
export default Fundations;