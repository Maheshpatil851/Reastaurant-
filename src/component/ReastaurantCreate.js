import React, { Component } from 'react'
import Navbar from './Navbar';

export default class ReastaurantCreate extends Component {
  constructor(){
    super();
    this.state={
      id :null,
      name :null,
      location:null,
      email :null
    }
  }
  create(){
    
    fetch('http://localhost:3000/posts',{
      method : "Post",
      headers:{
        "Content-Type":"application/json"
      },
      body : JSON.stringify(this.state)
    })
    .then((resp)=>resp.json())
    .then((res)=>{console.log(res)})
  }
 
  render() {
    return (
      <div>
        <Navbar  />
        <h1>Reastaurant Create</h1>

        <input type='text' placeholder='enter the Id'  onChange={(event)=>{this.setState({id:event.target.value})}} /><br /><br />
        <input type='text' placeholder='enter the name'  onChange={(event)=>{this.setState({name:event.target.value})}} /><br /><br />
        <input type='text' placeholder='enter the location'  onChange={(event)=>{this.setState({location:event.target.value})}} /><br /><br />
        <input type='email' placeholder='enter the email'  onChange={(event)=>{this.setState({email:event.target.value})}} /><br /><br />
        <button type='button'  onDoubleClick={this.create() }>Sign in</button>

        {/* <form>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Id:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="Id" placeholder='enter the Id' onChange={(event)=>{this.setState({id:event.target.value})}} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Name:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="Name" placeholder='enter the Name' onChange={(event)=>{this.setState({name:event.target.value})}}/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Location:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="Location" placeholder='enter the Location' onChange={(event)=>{this.setState({location:event.target.value})}}  />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder='enter the Email' onChange={(event)=>{this.setState({email:event.target.value})}}  />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onDoubleClick={this.create()}>Sign in</button>
        </form> */}
      </div>
    )
  }
}
