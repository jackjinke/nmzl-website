import React from 'react';
import ReactDOM from 'react-dom';
import '../component/common/CommonStyle.js';
import Homepage from '../component/index/Homepage';
import registerServiceWorker from '../registerServiceWorker';

ReactDOM.render(<Homepage/>, document.getElementById('root'));
registerServiceWorker();
