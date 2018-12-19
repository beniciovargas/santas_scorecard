import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import santa from './images/santa.jpg';


import UserSignup from './components/pages/UserSignup/UserSignup.js';
import Profile from './components/pages/Profile/Profile.js';


class App extends Component {
//METHODS NEEDED:
// createBars- this is populated by the refresh bars method
// refreshBars- got the method already done for this
// newDeeds 
// get deeds and add them to bottom bar
// checkbox values (either good or bad) - determines which bar
// pt values to deeds

state = {
  
}



  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
        </nav>
        <div className="App-mainContent">
          <img className="santa" src={santa}/>
          
            <Switch>
              <Route exact path='/' component={UserSignup}/>
              <Route exact path='/profile/' component={Profile}/>
            </Switch>

        </div>
      </div>

       
    );
  }
}

export default App;
