import React, {Component} from 'react';
import '../../style/common/WelcomeBackground.css';

export default class WelcomeBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {children: props.children};
        this.bgStyle = {
            backgroundImage: `url(${props.bgImg})`
        };
        Object.assign(this.bgStyle, props.bgStyle);
        this.contentDivStyle = props.contentDivStyle;
        this.contentSpanStyle = props.contentSpanStyle;
        this.bgClassName = [
            'WelcomeBackground',
            (props.parallax ? 'Parallax' : null),
            (props.underNavBar ? 'UnderNavBar' : null)
        ].join(' ');
    }

    render() {
        return (
            <div className={this.bgClassName} style={this.bgStyle}>
                <div className='WelcomeBackgroundContentDiv' style={this.contentDivStyle}>
                <span className='WelcomeBackgroundContentSpan' style={this.contentSpanStyle}>
                    {this.state.children}
                </span>
                </div>
            </div>
        );
    }
}