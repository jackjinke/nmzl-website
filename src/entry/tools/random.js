import React from 'react';
import ReactDOM from 'react-dom';
import '../../component/common/CommonStyle.js';
import RandomPage from '../../component/tools/random/RandomPage';
import registerServiceWorker from '../../registerServiceWorker';

ReactDOM.render(<RandomPage/>, document.getElementById('root'));
registerServiceWorker();
