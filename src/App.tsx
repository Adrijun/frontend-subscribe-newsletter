import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
   
   <h1>Loggin</h1>
   <label htmlFor="user">user</label><br />
   <input type="text" name='user' /><br />
   <label htmlFor="password">password</label><br />
   <input type="password" name='password' /><br />
   <button>skicka</button><br />

<h1>create user</h1>
   <label htmlFor="user">user</label><br />
   <input type="text" name='user' /><br />
   <label htmlFor="password">password</label><br />
   <input type="password" name='password' /><br />
   <button>skapa</button>
    </div>
  );
}

export default App;
