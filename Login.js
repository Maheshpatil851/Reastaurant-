import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login() {
  const [state, setState] = useState({ name: "", password: "" })
  const nevigate = useNavigate();
  // constructor() {
  //   super();

  //   this.state = {
  //     name: "",
  //     password: ""
  //   }
  // }
  const login = () => {
    try {

      fetch('http://localhost:3000/login?q=' + state.name)
        .then((resp) => resp.json())
        .then((res) => {
          res.map((item) => {
            if (item.name === state.name && item.password === state.password) {
              localStorage.setItem('login', JSON.stringify(item));
              nevigate('/list')
            }
           
            return console.log(item.name, item.password)
          })
          // if (res.length > 0) {
          //   localStorage.setItem('login', JSON.stringify(res))
          //   console.log(res);
          // }
        })

    } catch (error) {
      alert('some error occured enter the correct data');
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='container'>

        <h1>Login Panel</h1><br /><br />
        <input type="text" placeholder='enter usernme' onChange={event => { setState({ ...state, name: event.target.value }) }} ></input><br /><br />
        <input type="password" placeholder='enter password' onChange={event => { setState({ ...state, password: event.target.value }) }} ></input><br /><br />
        <button type='button' onClick={() => { login() }}>Login</button>
      </div>
    </>
  )
}

