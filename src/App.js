import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GetToken, onMessageListener } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isTokenFound, setTokenFound] = useState(false);
  GetToken({ setTokenFound });

  onMessageListener().then(payload => {
    console.log(payload);
    toast(<div><h2>title: {payload.notification.title}</h2><p>body: {payload.notification.body}</p></div>)
    console.log(payload);
  }).catch(err => console.log('failed: ', err));


  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          isTokenFound ?
            <p>Notification permission enabled 👍🏻</p> :
            <p>Need notification permission ❗️</p>
        }
      </header>
    </div>
  );
}

export default App;
