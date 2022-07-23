import React, { Component } from 'react'
import Navbar from './Navbar';

export default class Home extends Component {
  render() {
    return (
      <div className='conatiner'>
        <Navbar  />
        <h1>Home component</h1>
        <br />
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
