import React, { useState } from 'react'
import Navbar from './Navbar';

export default function Restocreate() {
    const [state, setState] = useState({ id: null, name: null, Location: null, email: null });

    const create = () => {
        try {



            fetch('http://localhost:3000/posts', {
                method: "Post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state)
            })
                .then((resp) => resp.json())
                .then((res) => {
                    alert('Your Restaurant data Created Sucessfully')
                })
        } catch (error) {
            alert('enter correct data');
            console.log(error);

        }
    }




    return (
        <div>
            <Navbar  />
            <br />
            <br />
            <h1>Create The Restaurant Data</h1>
            <br />
            <br />
            <input type='text' placeholder='enter the Id' onChange={(event) => { setState({ ...state, id: event.target.value }) }} /><br /><br />
            <input type='text' placeholder='enter the name' onChange={(event) => { setState({ ...state, name: event.target.value }) }} /><br /><br />
            <input type='email' placeholder='enter the location' onChange={(event) => { setState({ ...state, Location: event.target.value }) }} /><br /><br />
            <input type='email' placeholder='enter the email' onChange={(event) => { setState({ ...state, email: event.target.value }) }} /><br /><br />
            <button type='button' onClick={create}>Sign in</button>
        </div>
    )
}
