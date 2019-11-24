import React from 'react';

export default class FormErrors extends React.Component {
    render() {
        if (this.props.formErrors.length > 0) {
            return (
                <div className='formErrors'>
                    <p>{this.props.formErrors}</p>
                </div>
            );
        } else {
            return '';
        }
    }
}