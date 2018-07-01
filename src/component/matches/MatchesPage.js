import React, {Component} from 'react';
import SiteNavBar from '../common/SiteNavBar'
import SiteFooter from '../common/SiteFooter'
import WelcomeBackground from "../common/WelcomeBackground";
import MatchesTable from "./MatchesTable";

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
                    <MatchesTable/>
                    <div className='TextBlock'>
                        <p>Only Battle Cup matches with 3 or more registered NMZL players participated are listed
                            here.</p>
                        <p>Players need to check "Expose public match data" in Dota 2 client in order for OpenDota to
                            pick up new matches.</p>
                        <p>Dates here are all represented in America/New York timezone.</p>
                        <p>Data Source: OpenDota</p>
                    </div>
                </div>
                <SiteFooter/>
            </div>
        );
    }
}