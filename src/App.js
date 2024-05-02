import React, { useState } from 'react'
import axios from "axios";

function App() {
  const [name,setName]= useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');

const onSubmitAll = async(e)=>{
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:5001/api/post",{
      name:name,
      email:email,
      password:password
    })
    console.log(response.data);
    
  } catch (error) {
    console.log(error.message);
  }
}


  const nameFunction = (e)=>{
    setName(e.target.value);
    console.log(e.target.value);
  }
  const passwordFunction = (e)=>{
    setPassword(e.target.value);
    console.log(e.target.value);
  }
  const emailFunction = (e) =>{
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  
  return (
    <div style = {{textAlign:'center', marginTop:'50px'}}>
      <form onSubmit={onSubmitAll}>
        <div>
          <input type='text' id='name' onChange={nameFunction} placeholder='enter the name' />
        </div>
        <div>
          <input type='email' id='email' onChange={emailFunction} placeholder='enter the mailid' />
        </div>
        <div>
          <input type='password' id='password' onChange={passwordFunction} placeholder='enter the password' />
        </div>
        <div>
          <input type='submit' id='submit' value='submit' />
        </div>
      </form>
    </div>
  )
}

export default App

