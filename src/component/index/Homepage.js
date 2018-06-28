import React, {Component} from 'react';
import SiteNavBar from '../common/SiteNavBar'
import SiteFooter from '../common/SiteFooter'
import WelcomeBackground from "../common/WelcomeBackground";
import '../../style/index/Homepage.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export default class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <SiteNavBar/>
                <WelcomeBackground
                    bgImg={'/img/index/Techies-Background.jpg'}
                    bgStyle={{backgroundPosition: '45% 40%'}}
                    parallax underNavBar>
                    <span style={{
                        color: '#fff',
                        marginRight: '-20px',
                        letterSpacing: '20px'
                    }}>
                        NMZL
                    </span>
                </WelcomeBackground>
                <div className="content-block">
                    <div className="text-block">
                        <h3>Who we are</h3>
                        <div>
                            <p>NMZL is an amateur Dota 2 team, originally based in North America, founded in
                                September, 2016.</p>
                            <p>The squad is keen on all kinds of Dota 2 games, especially Battle Cups.</p>
                        </div>
                        <h3>Community</h3>
                        <div>
                            <p>There're no fixed lineup in NMZL - any friends of a NMZL member can join
                                the team and play with others anytime.</p>
                            <p>That said, NMZL is more like a community than just a Dota 2 team.</p>
                            <p>You can check all registered NMZL players in the players page.</p>
                        </div>
                        <h3>Join us on Discord!</h3>
                        <div className="discord-widget"/>
                    </div>
                </div>
                <SiteFooter/>
            </div>
        );
    }
}