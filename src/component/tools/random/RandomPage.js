import React, {Component} from 'react';
import SiteNavBar from '../../common/SiteNavBar'
import SiteFooter from '../../common/SiteFooter'
import RandomPicker from "./RandomPicker";
import ToolsTitle from "../ToolsTitle";

export default class RandomPage extends Component {
    render() {
        return (
            <div className="RandomPage">
                <SiteNavBar/>
                <div className='ContentBlock'>
                    <ToolsTitle title='Random a Hero'/>
                    <RandomPicker/>
                </div>
                <SiteFooter/>
            </div>
        );
    }
}