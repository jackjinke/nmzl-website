import React, {Component} from 'react';
import '../../style/tools/ToolsTitle.css';

export default class ToolsTitle extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (
            <div className="ToolsTitle">
                <h1>
                    {this.title}
                </h1>
                <hr/>
            </div>
        );
    }
}