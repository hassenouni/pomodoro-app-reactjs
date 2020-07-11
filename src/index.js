
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
global.jQuery = require('jquery');
require('bootstrap');




ReactDom.render(
      <App />,
      document.getElementById('root')
);
    