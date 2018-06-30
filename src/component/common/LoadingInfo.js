import React, {Component} from 'react';
import '../../style/common/LoadingInfo.css';

export default class LoadingInfo extends Component {
    render() {
        return (
            <div className='LoadingInfo'>
                <div className='LoadingSpinner'/>
                <div className='LoadingText'>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }
}