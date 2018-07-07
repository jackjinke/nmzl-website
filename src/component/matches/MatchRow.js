import React, {Component} from 'react';
import Util from '../common/Util';
import '../../style/matches/MatchRow.css';

export default class MatchRow extends Component {
    constructor(props) {
        super(props);
        this.match = props.match;
    }

    static getDurationString(duration) {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return minutes + ":" + seconds;
    }

    static getWinSide(win, team_side) {
        if (win) {
            return team_side;
        }
        else if (team_side === 'radiant') {
            return 'dire';
        }
        else {
            return 'radiant';
        }
    }

    static getDate(epochTime) {
        let options = {
            timeZone: 'America/New_York',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        };
        return new Date(epochTime * 1000).toLocaleDateString('en-US', options);
    }

    render() {
        return (
            <tr className={(this.match.win) ? 'success' : 'danger'}>
                <td>
                    <a href={'https://www.opendota.com/matches/' + this.match.match_id}>
                        {this.match.match_id}
                    </a>
                </td>
                <td>
                    <MatchResult win={this.match.win}/>
                </td>
                <td>
                    {MatchRow.getDate(this.match.start_time)}
                </td>
                <td>
                    {MatchRow.getDurationString(this.match.duration)}
                </td>
                <td>
                    <TeamLineup lineup={this.match.radiant_lineup} self={this.match.team_side === 'radiant'}
                                win={this.match.win}/>
                </td>
                <td>
                    <MatchScore radiantScore={this.match.radiant_score}
                                direScore={this.match.dire_score}
                                teamSide={this.match.team_side}
                                winSide={MatchRow.getWinSide(this.match.win, this.match.team_side)}/>
                </td>
                <td>
                    <TeamLineup lineup={this.match.dire_lineup} self={this.match.team_side === 'dire'}
                                win={this.match.win}/>
                </td>
            </tr>
        );
    }
}

class MatchResult extends Component {
    constructor(props) {
        super(props);
        this.win = props.win;
        this.resultClasses = ['MatchResult'];

        if (this.win) {
            this.resultClasses.push('WinResult');
        }
        else {
            this.resultClasses.push('LossResult');
        }
    }

    render() {
        return (
            <p className={this.resultClasses.join(' ')}>{(this.win) ? 'Win' : 'Loss'}</p>
        )
    }
}

class TeamLineup extends Component {
    constructor(props) {
        super(props);
        this.lineup = props.lineup;
        this.lineupClasses = ['TeamLineup'];

        if (props.self) {
            this.lineupClasses.push('SelfTeamLineup');
        }
        if (props.win) {
            this.lineupClasses.push('WinTeamLineup');
        }
        else {
            this.lineupClasses.push('LossTeamLineup');
        }
    }

    render() {
        return (
            <div className={this.lineupClasses.join(' ')}>
                {this.lineup.map((hero) => <img src={Util.resolveHeroImagePath(hero.hero_img)} alt={hero.hero_id}/>)}
            </div>
        )
    }
}

class MatchScore extends Component {
    constructor(props) {
        super(props);
        this.radiantScore = props.radiantScore;
        this.direScore = props.direScore;
        this.radiantClasses = [];
        this.direClasses = [];
        if (props.teamSide === 'radiant') {
            this.radiantClasses.push('SelfTeamScore');
        }
        else {
            this.direClasses.push('SelfTeamScore');
        }

        if (props.winSide === 'radiant') {
            this.radiantClasses.push('WinTeamScore');
        }
        else {
            this.direClasses.push('WinTeamScore');
        }
    }

    render() {
        return (
            <div className='MatchScore'>
                <span className={this.radiantClasses.join(' ')}>{this.radiantScore}</span>
                <span className={'TeamScoreSeparator'}> : </span>
                <span className={this.direClasses.join(' ')}>{this.direScore}</span>
            </div>
        )
    }
}