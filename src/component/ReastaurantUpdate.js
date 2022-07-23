import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import Navbar from './Navbar';


export default function ReastaurantUpdate(props) {
  // console.log(props.match.params.id)
  let history = useHistory ()
  const [state, setState] = useState({ id: " ", name: " ", Location: " ", email: " " });
  useEffect(() => {
    fetch('http://localhost:3000/posts/' + props.match.params.id)
      .then((resp) => resp.json())
      .then((res) => {
        setState({
          id: res.id,
          name: res.name,
          Location: res.Location,
          email: res.email
        })
      })
  }, [])
  ReastaurantUpdate.defaultProps = {
    id : '1'
  }
  const update = () => {
    try {
      
    fetch('http://localhost:3000/posts/' + props.match.params.id, {
      method: "Put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then((resp) => resp.json())
      .then((res) => { 
        alert('Your Restaurant data Updated Sucessfully')
        history.push('/list')
       })
           
    } catch (error) {
      alert('some error occured enter the correct data');
      console.log(error);
    }
  }

  return (
    <div>
      <Navbar  />
      <br />
      <br />
      <h1>Update The Restaurant Data</h1>
      <br />
      <br />
      <input type='text' placeholder='enter the Id' value={state.id} onChange={(event) => { setState({ ...state, id: event.target.value }) }} /><br /><br />
      <input type='text' placeholder='enter the name' value={state.name} onChange={(event) => { setState({ ...state, name: event.target.value }) }} /><br /><br />
      <input type='email' placeholder='enter the location' value={state.Location} onChange={(event) => { setState({ ...state, Location: event.target.value }) }} /><br /><br />
      <input type='email' placeholder='enter the email' value={state.email} onChange={(event) => { setState({ ...state, email: event.target.value }) }} /><br /><br />
      <button type='button' onClick={update}>Update Data</button>
    </div>
  )
}

