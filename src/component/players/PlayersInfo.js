import React, {Component} from 'react';
import PlayerBlock from "./PlayerBlock";

import '../../style/players/PlayersInfo.css';

const STATUS_PLAYER_INFO_FETCHING = 'PLAYER_INFO_FETCHING';
const STATUS_PLAYER_INFO_FETCHED = 'PLAYER_INFO_FETCHED';
const STATUS_PLAYER_INFO_FETCH_ERROR = 'PLAYER_INFO_FETCH_ERROR';

export default class PlayersInfo extends Component {
    constructor() {
        super();
        this.state = {status: STATUS_PLAYER_INFO_FETCHING};
    }

    getPlayers() {
        fetch('https://api.nmzl.us/prod/players')
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                this.setState({
                    status: STATUS_PLAYER_INFO_FETCHED,
                    playerBlocks: responseJson.map((player) => {
                        return (<PlayerBlock player={player}/>);
                    })
                });
            })
            .catch(() => {
                this.setState({status: STATUS_PLAYER_INFO_FETCH_ERROR});
            });
    }

    getContent(status) {
        switch (status) {
            case STATUS_PLAYER_INFO_FETCHING:
                return (<p>Loading...</p>);
            case STATUS_PLAYER_INFO_FETCHED:
                return this.state.playerBlocks;
            default:
                return (<p>Error</p>);
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