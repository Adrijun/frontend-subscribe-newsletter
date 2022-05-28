import React, { ChangeEvent } from 'react';
import './App.css';
import { useState } from "react"
import axios from 'axios';
import { request, ServerResponse } from 'http';
import { Http2ServerRequest } from 'http2';

function App() {

  interface InewUser {
    username: String,
    password: String,
    subscribe: boolean
  }
  
  const [newUser, setNewUser] = useState<InewUser>({username:'', password:'', subscribe:false})
  const [logginUser, setLoggin] = useState<InewUser>({username:'', password:'', subscribe:false})
  
  
  // pushar till backend -> api
  function sendToApi(){
    axios.post<InewUser[]>('http://localhost:3000/users/add', newUser)
    .then(res =>{
      console.log(res, 'Rätt');
    }).catch(err =>{
      console.log(err, 'Fel');
    });
  }

  // använder oss av inputfällt i create user
function handleChange(e:ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>){
  let name:string = e.target.name;

  if(name == 'username' || name == 'password'){ 
    setNewUser({...newUser, [name]: e.target.value});
}
  else{
    console.log('Det blev fel');
}
}

// loggin funktion

interface Iusers {
    _id: string,
    username: String,
    password: String,
    subscribe: boolean
}
let ApiUsers = axios.get<Iusers[]>('http://localhost:3000/users/loggin')
  .then(res =>{
    console.log(res, 'Rätt');
  }).catch(err =>{
    console.log(err, 'Fel');
  });

  console.log(logginUser);
  // använder oss av inputfällt i loggin
function LogginForm(e:ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>){
    let name:string = e.target.name;
  
    if(name == 'username' || name == 'password'){
      setLoggin({...logginUser, [name]: e.target.value});
  }
    else{
      console.log('Det blev fel');
  }
  }

//loggar in
function loggin(){

  var users = []
  // for (const ApiUser of ApiUsers){
  // }

}

  return (
    <div className="App">
   
   <h1>Loggin</h1>

   <form>
   <label htmlFor="username">username</label><br />
   <input type="text" name='username' onChange={LogginForm} /><br />
   <label htmlFor="password">password</label><br />
   <input type="text" name='password' onChange={LogginForm} /><br />
   <button onClick={loggin}>skicka</button><br />
   </form>

<h1>create user</h1>

<form>
   <label htmlFor="username">user</label><br />
   <input type="text" name='username' onChange={handleChange}
   />
   <br />
   <label htmlFor="password">password</label><br />
   <input type="text" name='password' onChange={handleChange} 
   />
   <br />
   <button onClick={sendToApi}>skapa</button>
   </form>
    </div>
    
  );
}

export default App;
