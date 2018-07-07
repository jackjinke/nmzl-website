import React, {Component} from 'react';
import SiteNavBar from '../common/SiteNavBar'
import SiteFooter from '../common/SiteFooter'
import WelcomeBackground from "../common/WelcomeBackground";
import PlayersInfo from "./PlayersInfo";

export default class PlayersPage extends Component {
    render() {
        return (
            <div className="PlayersPage">
                <SiteNavBar/>
                <WelcomeBackground
                    bgImg={'/img/players/Team-Photo.jpg'}
                    bgStyle={{backgroundPosition: '50% 72%', minHeight: '50%'}}>
                    <span className='DefaultTitleText'>
                        PLAYERS
                    </span>
                </WelcomeBackground>
                <div className='ContentBlock'>
                    <PlayersInfo/>
                    <div className='TextBlock'>
                        <p>Signature heroes are calculated based on the player's most played heroes in their recent
                            matches across all accounts.</p>
                        <p>OpenDota match data for all steam accounts listed here will be refreshed by NMZL.us every
                            day.</p>
                        <p>Data Source: OpenDota & Steam</p>
                    </div>
                </div>
                <SiteFooter/>
            </div>
        );
    }
}