import React, {Component} from 'react';

import '../../../style/players/PlayersInfo.css';
import LoadingInfo from "../../common/LoadingInfo";

const STATUS_HERO_DATA_FETCHING = 'HERO_DATA_FETCHING';
const STATUS_HERO_DATA_FETCHED = 'HERO_DATA_FETCHED';
const STATUS_HERO_DATA_FETCH_ERROR = 'HERO_DATA_FETCH_ERROR';

export default class RandomPicker extends Component {
    constructor() {
        super();
        this.state = {status: STATUS_HERO_DATA_FETCHING};
    }

    getHeroMetadata() {
        fetch('https://api.nmzl.us/prod/herodata').then((response) => {
            return response.json();
        }).then((responseJson) => {
            this.setState({
                status: STATUS_HERO_DATA_FETCHED,
                heroData: responseJson
            });
        }).catch(() => {
            this.setState({status: STATUS_HERO_DATA_FETCH_ERROR});
        });
    }

    getContent(status) {
        switch (status) {
            case STATUS_HERO_DATA_FETCHING:
                return (<LoadingInfo loadingText='Loading hero data...'/>);
            case STATUS_HERO_DATA_FETCHED:
                return (<p>Got hero data</p>);
            default:
                return (<p>Whoops, something's wrong</p>);
        }
    }

    componentWillMount() {
        this.getHeroMetadata();
    }

    render() {
        return (
            <div className='RandomPicker'>
                <p>Work in Progress</p>
                {this.getContent(this.state.status)}
            </div>
        )
    }
}