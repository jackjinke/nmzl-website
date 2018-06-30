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
                </div>
                <SiteFooter/>
            </div>
        );
    }
}