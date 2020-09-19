import React from 'react';
import ReactDom from 'react-dom';

import './assets/styles/Global.scss';

import App from './App';

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('app')
);
