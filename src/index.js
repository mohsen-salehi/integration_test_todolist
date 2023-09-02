import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { StoreContextProvidor } from './context/store';

ReactDOM.render(
  <StoreContextProvidor>
    <App/>
  </StoreContextProvidor>,
  document.getElementById('root')
);
