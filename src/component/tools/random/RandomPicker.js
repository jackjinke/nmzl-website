import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import LoadingInfo from "../../common/LoadingInfo";
import Util from '../../common/Util';
import '../../../style/tools/random/RandomPicker.css'

const STATUS_HERO_METADATA_FETCHING = 'HERO_DATA_FETCHING';
const STATUS_HERO_METADATA_FETCHED = 'HERO_DATA_FETCHED';
const STATUS_HERO_METADATA_FETCH_ERROR = 'HERO_DATA_FETCH_ERROR';

const STATUS_BUTTON_LOAD = 'BUTTON_LOAD';
const STATUS_BUTTON_CLICKED = 'BUTTON_CLICKED';

const LEVEL_MAP = {
    1: 'Herald',
    2: 'Guardian',
    3: 'Crusader',
    4: 'Archon',
    5: 'Legend',
    6: 'Ancient',
    7: 'Divine',
    8: 'Immortal',
};

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
        this.winRateTableRef = React.createRef();
    }

    setHero(heroId) {
        this.setState({heroId: heroId});
        if (this.winRateTableRef.current) {
            this.winRateTableRef.current.setHero(heroId);
        }
    }

    getHeroName(id) {
        return this.heroData[id].localized_name.S;
    }

    getContent() {
        if (this.state.heroId) {
            return (
                <div>
                    <h5>GabeN just helped you picked:</h5>
                    <div className='RandomResult-Hero'>
                        <img src={Util.resolveHeroImagePath(this.heroData[this.state.heroId].img.S)}
                             alt={this.getHeroName(this.state.heroId)}/>
                    </div>
                    <div className='RandomResult-HeroInfo'>
                        <WinrateTable heroId={this.state.heroId}
                                      heroData={this.heroData}
                                      minLevel={5}
                                      maxLevel={8}
                                      ref={this.winRateTableRef}/>
                    </div>
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

class WinrateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {heroId: props.heroId};
        this.heroData = props.heroData;
        this.minLevel = props.minLevel;
        this.maxLevel = props.maxLevel;

        this.setHero = this.setHero.bind(this);
    }

    setHero(heroId) {
        this.setState({heroId: heroId});
    }

    getWinrateAtLevel(level) {
        return ((this.heroData[this.state.heroId].winrate.M[level].N) * 100).toFixed(2);
    }

    getWinrateRows() {
        let matchRows = [];
        for (let level = this.minLevel; level <= this.maxLevel; level++) {
            matchRows.push(
                <tr>
                    <td>{LEVEL_MAP[level]}</td>
                    <td>{this.getWinrateAtLevel(level)}%</td>
                </tr>
            );
        }
        return matchRows;
    }

    render() {
        return (
            <div className='WinrateTable'>
                <p style={{fontWeight: 'bold'}}>
                    Winrate
                </p>
                <Table condensed>
                    <tbody>
                    {this.getWinrateRows()}
                    </tbody>
                </Table>
            </div>
        )
    }
}