import React from "react";
import {withTranslation} from 'react-i18next';


export class Locals1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
        }
    };

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
                    <h3>{t('loc.1')}</h3>
                    <p>{t('loc.11')}</p>
                </div>
                <div className="items"><p>{t('loc.12')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('loc.2')}</h3>
                    <p>{t('loc.21')}</p>
                </div>
                <div className="items"><p>{t('loc.22')}</p>
                </div>
            </div>
            <hr style={{
                color: 'black',
                width: '100%', marginTop: '10px', marginBottom: '10px'
            }}/>
            <div className="fundEl">
                <div className="description">
                    <h3>{t('loc.3')}</h3>
                    <p>{t('loc.31')}</p>
                </div>
                <div className="items"><p>{t('loc.32')}</p>
                </div>
            </div>
        </div>


        return (
            <div className="fundations">
                <div className="desc">
                    <h2> {t('loc.desc')}</h2></div>
                <div className="page">
                    {page1}
                </div>
                <div className="buttons" style={{visibility: 'hidden'}}>
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

const Locals = withTranslation()(Locals1);
export default Locals;