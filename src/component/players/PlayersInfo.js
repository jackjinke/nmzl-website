import React, {Component} from 'react';
import PlayerBlock from "./PlayerBlock";

import '../../style/players/PlayersInfo.css';
import LoadingInfo from "../common/LoadingInfo";

const STATUS_PLAYERS_FETCHING = 'PLAYERS_FETCHING';
const STATUS_PLAYERS_FETCHED = 'PLAYERS_FETCHED';
const STATUS_PLAYERS_FETCH_ERROR = 'PLAYERS_FETCH_ERROR';

export default class PlayersInfo extends Component {
    constructor() {
        super();
        this.state = {status: STATUS_PLAYERS_FETCHING};
    }

    getPlayers() {
        fetch('https://api.nmzl.us/prod/players').then((response) => {
                return response.json();
        }).then((responseJson) => {
                this.setState({
                    status: STATUS_PLAYERS_FETCHED,
                    playerBlocks: responseJson.map((player) => {
                        return (<PlayerBlock player={player}/>);
                    })
                });
        }).catch(() => {
            this.setState({status: STATUS_PLAYERS_FETCH_ERROR});
            });
    }

    getContent(status) {
        switch (status) {
            case STATUS_PLAYERS_FETCHING:
                return (<LoadingInfo loadingText='Loading players...'/>);
            case STATUS_PLAYERS_FETCHED:
                return this.state.playerBlocks;
            default:
                return (<p>Whoops, something's wrong</p>);
        }
    }

    componentWillMount() {
        this.getPlayers();
    }

    render() {
        return (
            <div className='PlayersInfo'>
                {this.getContent(this.state.status)}
            </div>
        )
    }
}