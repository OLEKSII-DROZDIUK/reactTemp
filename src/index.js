import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Practic from './Practic';

ReactDOM.render(<App tittle={"My React learn temp"}/>, document.getElementById('one')); //only for test i create two rendor DOM
ReactDOM.render(<Practic/>, document.getElementById('main-navbar'));//only for test i create two rendor DOM

