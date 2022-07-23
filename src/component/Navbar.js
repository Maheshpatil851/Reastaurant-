import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEdit, faHome, faList, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"> <NavLink className="nav-NavLink active" aria-current="page" to="/"><FontAwesomeIcon icon={faHome} color='red' />Home</NavLink></li>&nbsp;&nbsp;&nbsp;
                            <li className="nav-item"><NavLink className="nav-NavLink" to="/list"><FontAwesomeIcon icon={faList} color='red' />&nbsp;List</NavLink></li>   &nbsp;&nbsp;&nbsp;
                            <li className="nav-item"><NavLink className="nav-NavLink" to="/create"><FontAwesomeIcon icon={faPlus} color='red' />&nbsp;Create</NavLink></li>   &nbsp;&nbsp;&nbsp;
                            <li className="nav-item"><NavLink className="nav-NavLink" to="/search"><FontAwesomeIcon icon={faSearch} color='red' />&nbsp;Search</NavLink></li>   &nbsp;&nbsp;&nbsp;
                            <li className="nav-item"><NavLink className="nav-NavLink" to="/update"><FontAwesomeIcon icon={faEdit} color='red' />&nbsp;Update</NavLink></li>&nbsp;&nbsp;&nbsp;
                            { 
                            localStorage.getItem('login')?
                            <li className="nav-item"><NavLink className="nav-NavLink" to="/logout"><FontAwesomeIcon icon={faUser} color='red' />&nbsp;Logout</NavLink></li>
                            :
                            <li className="nav-item"><NavLink className="nav-NavLink" to="/login"><FontAwesomeIcon icon={faUser} color='red' />&nbsp;Login</NavLink></li>
                            }
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
