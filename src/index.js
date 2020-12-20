import './css/modal.css'
import './css/app.css'

import React from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './components/ChatApp';
import actionCable from 'actioncable';

const CableApp = {}

CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')

ReactDOM.render(
  <React.StrictMode>
    <ChatApp cableApp={CableApp}/>
  </React.StrictMode>,
  document.getElementById('root')
);
