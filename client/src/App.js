import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import UserSignup from './components/pages/UserSignup/UserSignup.js';
import Profile from './components/pages/Profile/Profile.js';
// add newDeeds in DB ****

class App extends Component {



  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
        </nav>
        <div className="App-mainContent">
          
            <Switch>
              <Route exact path='/' component={UserSignup}/>
              <Route exact path='/profile/' component={Profile}/>
              <Route exact path='/profile/:email/' component={Profile}/>
            </Switch>

        </div>
      </div>

       
    );
  }
}

export default App;
