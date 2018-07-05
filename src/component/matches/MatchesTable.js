import React, {Component} from 'react';
import LoadingInfo from "../common/LoadingInfo";
import {Table} from 'react-bootstrap';
import MatchRow from "./MatchRow";
import '../../style/matches/MatchesTable.css';

const STATUS_MATCHES_FETCHING = 'MATCHES_FETCHING';
const STATUS_MATCHES_FETCHED = 'MATCHES_FETCHED';
const STATUS_MATCHES_FETCH_ERROR = 'MATCHES_FETCH_ERROR';

export default class MatchesTable extends Component {
    constructor() {
        super();
        this.state = {status: STATUS_MATCHES_FETCHING};
    }

    getMatches() {
        fetch('https://api.nmzl.us/matches').then((response) => {
            return response.json();
        }).then((responseJson) => {
            this.setState({
                status: STATUS_MATCHES_FETCHED,
                matchRows: responseJson.map((match) => {
                    return (<MatchRow match={match}/>);
                })
            });
        }).catch(() => {
            this.setState({status: STATUS_MATCHES_FETCH_ERROR});
        });
    }

    getContent(status) {
        switch (status) {
            case STATUS_MATCHES_FETCHING:
                return (<LoadingInfo loadingText='Loading matches...'/>);
            case STATUS_MATCHES_FETCHED:
                return (
                    <Table hover responsive>
                        <MatchesTableHeader/>
                        <MatchesTableBody rows={this.state.matchRows}/>
                    </Table>
                );
            default:
                return (<p>Whoops, something's wrong</p>);
        }
    }

    componentWillMount() {
        this.getMatches();
    }

    render() {
        return (
            <div className="MatchesTable">
                {this.getContent(this.state.status)}
            </div>
        );
    }
}

class MatchesTableHeader extends Component {
    render() {
        return (
            <thead>
            <th>Match ID</th>
            <th>Result</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Radiant Lineup</th>
            <th>Score</th>
            <th>Dire Lineup</th>
            </thead>
        );
    }
}

class MatchesTableBody extends Component {
    constructor(props) {
        super(props);
        this.rows = props.rows;
    }

    render() {
        return (
            <tbody>{this.rows}</tbody>
        );
    }
}