import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import axios from 'axios';

function App() {

  interface InewUser {
    username: String,
    password: String,
  }

  // const [username, setusername] = useState('');
  // const [password, setpassword] = useState('');
  
  // let handleSubmit = async () =>{
  //   try{
  //     let res = await fetch('http://localhost:3000/users/add', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         username: username,
  //         password: password,
  //       }),
  //     });
  //     if (res.status === 200){
  //       console.log('rätt');
  //     } else {
  //       console.log('fel');
  //     }
  //   } catch (err){
  //     console.log(err); 
  //   }
  // };
  const [newUser, setNewUser] = useState<InewUser>({username:'', password:''})

  function sendToApi(){
    axios.post<InewUser>('')
    .then(res =>{
      console.log(res, 'Rätt');
    }).catch(err =>{
      console.log(err, 'Fel');
    });
  }

function handleChange(e:ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>){
  let name:string = e.target.name;

  if(name == 'username' || name == 'password'){ 
    setNewUser({...newUser, [name]: e.target.value});
}
  else{
    console.log('Det blev fel');
}
  return;
}


  return (
    <div className="App">
   
   <h1>Loggin</h1>
   <label htmlFor="username">username</label><br />
   <input type="text" name='username' /><br />
   <label htmlFor="password">password</label><br />
   <input type="text" name='password' /><br />
   <button>skicka</button><br />

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
