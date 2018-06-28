import React from 'react';
import ReactDOM from 'react-dom';
import './style/common/common.css';
import PlayersPage from './component/players/PlayersPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PlayersPage/>, document.getElementById('root'));
registerServiceWorker();
