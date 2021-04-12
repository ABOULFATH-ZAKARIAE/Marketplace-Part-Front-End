import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/App/Router';
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);
