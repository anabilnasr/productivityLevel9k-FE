import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './config/firebase-config'
import SettingsContextProvider, { SettingContext } from './context/SettingsContext';
ReactDOM.render(
  <React.StrictMode>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
