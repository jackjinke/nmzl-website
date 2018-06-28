import React, {Component} from 'react';
import '../../style/players/PlayerBlock.css'

export default class PlayerBlock extends Component {
    constructor(props) {
        super(props);
        this.player = props.player;
    }

    render() {
        return (
            <div className='PlayerBlock'>
                <PlayerBasicInfo playerName={this.player.player_name}/>
                <PlayerSteamAccounts steamAccounts={this.player.steam_accounts}/>
                <PlayerSignatureHeroes signatureHeroes={this.player.signature_heroes}/>
            </div>
        )
    }
}

class PlayerBasicInfo extends Component {
    constructor(props) {
        super(props);
        this.playerName = props.playerName;
        this.state = {playerPortrait: ''};
    }

    checkPlayerPortrait() {
        let imgName = this.playerName.replace(', ', '') + '.jpg';
        let notFoundName = 'NotFound.jpg';
        let imgPathPrefix = '/img/players/portrait/';
        fetch(imgPathPrefix + imgName)
            .then((response) => {
                if (response.ok) {
                    this.setState({playerPortrait: imgPathPrefix + imgName});
                }
                else throw Error(`${this.playerName}'s portrait is missing; please contact website administrator`);
            })
            .catch(() => {
                this.setState({playerPortrait: imgPathPrefix + notFoundName});
            });
    }

    componentWillMount() {
        this.checkPlayerPortrait();
    }

    render() {
        return (
            <div className='PlayerBasicInfo'>
                <div className='PlayerPortrait'>
                    <img src={this.state.playerPortrait} alt={this.playerName}/>
                </div>
                <p>
                    {this.playerName}
                </p>
            </div>
        );
    }

}

class PlayerSteamAccounts extends Component {
    constructor(props) {
        super(props);
        this.steamAccounts = props.steamAccounts;
    }

    static getPlayerDotaProfileLink(steamAccount) {
        return 'https://www.opendota.com/players/' + steamAccount.steam_id;
    }

    static getSteamOnlineStatus(state) {
        switch (state) {
            case 1:
                return 'PlayerSteamOnline';
            case 2:
                return 'PlayerSteamInGame';
            default:
                return 'PlayerSteamOffline';
        }
    }

    render() {
        let steamAccountBlocks = this.steamAccounts.map((steamAccount) => {
            return (
                <div className='PlayerSteamAccount'>
                    <PlayerSteamAvatar steamAccount={steamAccount}/>
                    <p>
                        {steamAccount.steam_name}
                    </p>
                    <p>
                        {'ID: ' + steamAccount.steam_id}
                    </p>
                </div>
            );
        });

        return (
            <div className='PlayerSteamAccounts'>
                {steamAccountBlocks}
            </div>
        );
    }
}

class PlayerSteamAvatar extends Component {
    constructor(props) {
        super(props);
        this.steamAccount = props.steamAccount;
    }

    render() {
        return (
            <a href={PlayerSteamAccounts.getPlayerDotaProfileLink(this.steamAccount)}>
                <img src={this.steamAccount.avatar}
                     alt={this.steamAccount.steam_id}
                     className={`PlayerSteamAvatar ${PlayerSteamAccounts.getSteamOnlineStatus(this.steamAccount.state)}`}/>
            </a>
        );
    }
}

class PlayerSignatureHeroes extends Component {
    constructor(props) {
        super(props);
        this.signatureHeroes = props.signatureHeroes;
    }

    render() {
        let signatureHeroBlocks = this.signatureHeroes.map((signatureHero) => {
            return (
                <div className='PlayerSignatureHero'>
                    <img src={signatureHero.hero_img} alt={signatureHero.hero_id}/>
                    <p>
                        {(signatureHero.win_rate * 100).toFixed(2) + '% (' + signatureHero.win + '/' + signatureHero.games}
                    </p>
                </div>
            );
        });

        return (
            <div className='PlayerSignatureHeroes'>
                {signatureHeroBlocks}
            </div>

        )
    }
}