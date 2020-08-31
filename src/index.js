import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DialLists from './components/dialLists';
import DialListsDark from './components/dialListsDark';
import DialBox from './components/dialbox';
import DialBoxDark from './components/dialboxdark';
import CallDetails from './components/calldetails';
import CallDetailsDark from './components/calldetailsdark';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CallDetails />
    <br />
    <CallDetailsDark />
    <br />
    <DialBox />
    <br />
    <DialBoxDark />

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
