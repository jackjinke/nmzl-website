import React from 'react';
import ReactDOM from 'react-dom';
import './style/common/common.css';
import Homepage from './component/index/Homepage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Homepage/>, document.getElementById('root'));
registerServiceWorker();
