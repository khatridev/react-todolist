import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header';
import ListWrapper from './components/list-wrapper';



ReactDOM.render(
  <React.StrictMode>
    <React.Fragment className="container">
      <Header />
      <ListWrapper />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

