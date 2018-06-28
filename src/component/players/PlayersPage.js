import React, {Component} from 'react';
import SiteNavBar from '../common/SiteNavBar'
import SiteFooter from '../common/SiteFooter'
import WelcomeBackground from "../common/WelcomeBackground";
import PlayersInfo from "./PlayersInfo";

import '../../style/players/PlayersPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export default class PlayersPage extends Component {
    render() {
        return (
            <div className="PlayersPage">
                <SiteNavBar/>
                <WelcomeBackground
                    bgImg={'/img/players/Team-Photo.jpg'}
                    bgStyle={{backgroundPosition: '50% 72%', minHeight: '50%'}}>
                    <span style={{
                        color: '#fff',
                        marginRight: '-20px',
                        letterSpacing: '20px'
                    }}>
                        PLAYERS
                    </span>
                </WelcomeBackground>
                <div className='content-block'>
                    <PlayersInfo/>
                </div>
                <SiteFooter/>
            </div>
        );
    }
}