import React from 'react';
import ReactDOM from 'react-dom';
import './component/common/CommonStyle.js';
import PlayersPage from './component/players/PlayersPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PlayersPage/>, document.getElementById('root'));
registerServiceWorker();
