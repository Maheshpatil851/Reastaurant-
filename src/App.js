import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RestaurantList from './component/RestaurantList';
import ReastaurantUpdate from './component/ReastaurantUpdate';
import ReastaurantDetails from './component/ReastaurantDetails';
import ReastaurantSearch from './component/ReastaurantSearch';
import Home from './component/Home';
import Restocreate from './component/Restocreate';

import Login from './component/Login';
import Logout from './component/Logout';


function App() {
  return (
    <Router>
    <div className="App">
      
      
        {/* <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/list'>List</Link></li>
          <li><Link to='/create'>Create</Link></li>
          <li><Link to='/details'>Details</Link></li>
          <li><Link to='/search'>Search</Link></li>
          <li><Link to='/update'>Update</Link></li>
        </ul> */}
        <Switch>
        <Route exact path='/'>
            <Home />
          </Route>
          <Route  exact path="/list">
            <RestaurantList key="list"/>
          </Route>
          <Route  exact path="/login">
            <Login key="login"/>
          </Route>
          <Route  exact path="/logout">
            <Logout key="logout"/>
          </Route>
          <Route exact path='/create'>
            <Restocreate/>
          </Route>
          <Route exact path='/update/:id'
          render={props=>(
            <ReastaurantUpdate {...props} />
          )}
          >
            
            
          </Route>
          <Route exact path='/details'>
            <ReastaurantDetails key="details"/>
          </Route>
          <Route exact path='/search'>
            <ReastaurantSearch key="search"/>
          </Route>
        </Switch>

        {/* we to give unic key for each component for remounting  
        1. Use without bootstrap form
        2.update the component usint put Api use id for updating the particular row and for passing id use props 
        3.use font using font awesome react app
        4.install react bootstrap and make the navbar and  remount the element*/}


     
    </div>
    </Router>
  );
}

export default App;
