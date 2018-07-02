import React from 'react';
import ReactDOM from 'react-dom';
import '../component/common/CommonStyle.js';
import MatchesPage from "../component/matches/MatchesPage";
import registerServiceWorker from '../registerServiceWorker';

ReactDOM.render(<MatchesPage/>, document.getElementById('root'));
registerServiceWorker();
