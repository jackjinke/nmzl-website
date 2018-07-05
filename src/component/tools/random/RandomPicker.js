import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import LoadingInfo from "../../common/LoadingInfo";

const STATUS_HERO_METADATA_FETCHING = 'HERO_DATA_FETCHING';
const STATUS_HERO_METADATA_FETCHED = 'HERO_DATA_FETCHED';
const STATUS_HERO_METADATA_FETCH_ERROR = 'HERO_DATA_FETCH_ERROR';

export default class RandomPicker extends Component {
    constructor() {
        super();
        this.state = {status: STATUS_HERO_METADATA_FETCHING};
    }

    getHeroMetadata() {
        fetch('https://api.nmzl.us/herometadata').then((response) => {
            return response.json();
        }).then((responseJson) => {
            this.setState({
                status: STATUS_HERO_METADATA_FETCHED,
                heroData: responseJson
            });
        }).catch(() => {
            this.setState({status: STATUS_HERO_METADATA_FETCH_ERROR});
        });
    }

    getContent(status) {
        switch (status) {
            case STATUS_HERO_METADATA_FETCHING:
                return (<LoadingInfo loadingText='Loading hero data...'/>);
            case STATUS_HERO_METADATA_FETCHED:
                let content = [(<Button onClick={this.onClickRandomButton()}>RANDOM</Button>)];
                if (this.state.randomHeroId) {
                    content.push(<p>{this.state.randomHeroId}</p>);
                }
                return content;
            default:
                return (<p>Whoops, something's wrong</p>);
        }
    }

    onClickRandomButton() {
        let randomHeroId = Math.random() * this.state.heroData.length;
        let newState = this.state;
        newState[randomHeroId] = randomHeroId;
        this.setState(newState);
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