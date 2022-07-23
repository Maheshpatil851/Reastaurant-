import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: ""
    }
  }
  login() {
    try {

      fetch('http://localhost:3000/login?q=' + this.state.name)
        .then((resp) => resp.json())
        .then((res) => {
          res.map((item)=>{
            if(item.name===this.state.name && item.password===this.state.password){
              localStorage.setItem('login', JSON.stringify(item));
              <Redirect to='/list' />
            }
            return console.log(item.name,item.password)
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
  render() {
    return (
      <>
      <Navbar  />
      <div className='container'>
       
        <h1>Login Panel</h1><br /><br />
        <input type="text" placeholder='enter usernme' onChange={event => { this.setState({ name: event.target.value }) }} ></input><br /><br />
        <input type="password" placeholder='enter password' onChange={event => { this.setState({ password: event.target.value }) }} ></input><br /><br />
        <button type='button' onClick={this.login()}>Login</button>
      </div>
      </>
    )
  }
}
