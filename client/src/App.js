import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import santa from './images/santa.jpg';


import UserSignup from './components/pages/UserSignup/UserSignup.js';
import Profile from './components/pages/Profile/Profile.js';
// add newDeeds in DB ****

class App extends Component {
//METHODS NEEDED:
// createBars- this is populated by the refresh bars method
// refreshBars- got the method already done for this 
// add newDeeds in DB ****  Beni will do
// pt values to deeds- increment, find file with code ****
// get deeds and add them to bottom bar render method ****
// toggle button method, distinction of naughty or nice ****


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
