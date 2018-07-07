import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import LoadingInfo from "../../common/LoadingInfo";
import Util from '../../common/Util';
import '../../../style/tools/random/RandomPicker.css'

const STATUS_HERO_METADATA_FETCHING = 'HERO_DATA_FETCHING';
const STATUS_HERO_METADATA_FETCHED = 'HERO_DATA_FETCHED';
const STATUS_HERO_METADATA_FETCH_ERROR = 'HERO_DATA_FETCH_ERROR';

const STATUS_BUTTON_LOAD = 'BUTTON_LOAD';
const STATUS_BUTTON_CLICKED = 'BUTTON_CLICKED';

export default class RandomPicker extends Component {
    constructor() {
        super();
        this.state = {status: STATUS_HERO_METADATA_FETCHING};
        this.randomResultBlockRef = React.createRef();
        this.onClickRandomButton = this.onClickRandomButton.bind(this);
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
                let content = [];
                content.push(<RandomResultBlock heroData={this.state.heroData}
                                                ref={this.randomResultBlockRef}/>);
                content.push(<RandomButton onClick={this.onClickRandomButton}/>);
                return content;
            default:
                return (<p>Whoops, something's wrong</p>);
        }
    }

    onClickRandomButton() {
        let heroDataKeys = Object.keys(this.state.heroData);
        let randomHeroId = heroDataKeys[Math.floor(Math.random() * heroDataKeys.length)];
        this.randomResultBlockRef.current.setHero(randomHeroId);
    }

    componentWillMount() {
        this.getHeroMetadata();
    }

    render() {
        return (
            <div className='RandomPicker'>
                {this.getContent(this.state.status)}
                <hr/>
                <div className='TextBlock'>
                    <h6>This page is still very basic at the moment.</h6>
                    <h6>Please submit your suggestion and feature request to website admin.</h6>
                </div>
            </div>
        )
    }
}

class RandomButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = () => {
            props.onClick();
            this.setState({status: STATUS_BUTTON_CLICKED});
        };
        this.state = {status: STATUS_BUTTON_LOAD};
    }

    getButtonText() {
        switch (this.state.status) {
            case STATUS_BUTTON_LOAD:
                return 'Random a Hero';
            default:
                return 'Re-Random';
        }
    }

    render() {
        return (
            <div className='RandomButton'>
                <Button onClick={this.onClick}>
                    {this.getButtonText()}
                </Button>
            </div>
        )
    }
}


class RandomResultBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.heroData = props.heroData;
        this.setHero = this.setHero.bind(this);
    }

    setHero(heroId) {
        this.setState({heroId: heroId});
    }

    getContent() {
        console.log(this.state.heroId);
        if (this.state.heroId) {
            return (
                <div>
                    <h5>GabeN just helped you picked:</h5>
                    <img src={Util.resolveHeroImagePath(this.heroData[this.state.heroId].img.S)}
                         alt={this.state.heroId}/>
                </div>
            )
        }
        else {
            return (
                <div className='TextBlock'>
                    <h5>Having trouble deciding which hero to play?</h5>
                    <h5>Don't want to random Chen and to be forced to suffer?</h5>
                </div>
            );
        }
    }

    render() {
        return (
            <div className='RandomResultBlock'>
                {this.getContent()}
            </div>
        )
    }
}