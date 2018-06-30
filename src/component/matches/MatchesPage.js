import React, {Component} from 'react';
import SiteNavBar from '../common/SiteNavBar'
import SiteFooter from '../common/SiteFooter'
import WelcomeBackground from "../common/WelcomeBackground";

export default class MatchesPage extends Component {
    render() {
        return (
            <div className="MatchesPage">
                <SiteNavBar/>
                <WelcomeBackground
                    bgImg={'/img/matches/Battle-Cup.png'}
                    bgStyle={{backgroundPosition: '50% 50%', minHeight: '50%'}}>
                    <span className='DefaultTitleText'>
                        MATCHES
                    </span>
                </WelcomeBackground>
                <div className='ContentBlock'>
                    <div className='TextBlock'>
                        <h3>Work In Progress</h3>
                    </div>
                </div>
                <SiteFooter/>
            </div>
        );
    }
}