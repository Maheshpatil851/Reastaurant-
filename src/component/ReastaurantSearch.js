import React, { Component } from 'react'
import Navbar from './Navbar';

export default class ReastaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchdata: ""

    }
  }
  search(key) {
    fetch('http://localhost:3000/posts?q=' + key)
      .then((resp) => resp.json())
      .then((res) => {
        this.setState({ searchdata: res })
        console.log(this.state.searchdata)

      })
  }
  // renderproduct(){
  //   this.state.searchdata.split(',').map((item, i) => {
  //     console.log(item.name)
  //     // <div className="list border-bottom">
  //     //   <i className="fa fa-fire"></i>
  //     //   <div className="d-flex flex-column ml-3">
  //     //     <span>{item.name}</span>
  //     //     <small>{item.email}</small>
  //     //   </div>
  //     // </div>

  //   })

  // }

  render() {
    return (
      <div>
        <Navbar  />
        <h1>Reastaurant Search</h1>
        <br />
        <input type="text" onChange={(event) => { this.search(event.target.value) }}  /><br />

       
         <div className="container mt-5 " id='searchbar'>
          <div className="row d-flex justify-content-center ">
            <div className="col-md-6">
              <div className="card">
                <div className="input-box">
                  <input type="text"  onChange={(event) => { this.search(event.target.value) }} className="form-control" />
                  <i className="fa fa-search"></i>
                </div>
                {/* {
                  this.state.searchdata.map(item =>{<div>{item.name}</div>})
                  

                } */}
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}
