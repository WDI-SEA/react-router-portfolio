import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Uncomment lines 6 and 9 to render class based App component, comment out 7 & 10
// import AppClass from './AppClass';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App  />, document.getElementById('root'));
// ReactDOM.render(<AppClass  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
