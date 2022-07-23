import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';

export default class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null
    }

  }
   componentDidMount() {
    fetch('http://localhost:3000/posts')
      .then((resp) => resp.json())
      .then((res) => {
        this.setState({ list: res })
      })
  }

  deletedata(id) {
      console.log('hello')

    // try {
    //   fetch('http://localhost:3000/posts/' + id, {
    //     method: "DELETE"
    //   })
    //     .then((resp) => resp.json())
    //     .then((res) => {
    //       alert('Your Restaurant data deleted Sucessfully');
    //     })

    // } catch (error) {
    //   alert('some error occured enter the correct data');
    //   console.log(error);
    // }
  }

  render() {
    return (

      <div>
        <Navbar  />

        <h1>Reastaurant List</h1>
        {
          this.state.list ?
            <div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Email</th>
                    <th scope="col">Operations</th>

                  </tr>
                </thead>
                <tbody>
                  {this.state.list.map((item, i) =>
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.Location}</td>
                      <td>{item.email}</td>
                      <td><Link to={'/update/' + item.id}><FontAwesomeIcon icon={faEdit} color='orange' /> </Link>
                        <Link ><FontAwesomeIcon  icon={faTrash} color='red' /></Link></td>
                    </tr>
                  )}
                </tbody>
              </table>

            </div>
            :
            <p>please wait.........</p>
        }
      </div>
    )
  }
}
