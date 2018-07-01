import React, {Component} from 'react';
import '../../style/common/LoadingInfo.css';

export default class LoadingInfo extends Component {
    constructor(props) {
        super(props);
        this.loadingText = props.loadingText ? props.loadingText : 'Loading...'
    }

    render() {
        return (
            <div className='LoadingInfo'>
                <div className='LoadingSpinner'/>
                <div className='LoadingText'>
                    <p>{this.loadingText}</p>
                </div>
            </div>
        );
    }
}