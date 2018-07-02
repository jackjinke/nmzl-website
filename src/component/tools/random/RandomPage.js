import React, {Component} from 'react';
import SiteNavBar from '../../common/SiteNavBar'
import SiteFooter from '../../common/SiteFooter'
import RandomPicker from "./RandomPicker";

export default class RandomPage extends Component {
    render() {
        return (
            <div className="RandomPage">
                <SiteNavBar/>
                <div className='ContentBlock'>
                    <h1>Random a Hero</h1>
                    <hr/>
                    <RandomPicker/>
                </div>
                <SiteFooter/>
            </div>
        );
    }
}