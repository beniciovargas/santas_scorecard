import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

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
  email: '',
  name: '',
  deeds_desc:'',
  show: false,
}

onChangeEmail = (ev) => {
  this.setState({
    email: ev.target.value,
  });
}

onChangeName = (ev) => {
  this.setState({
    name: ev.target.value,
  });
}

onChangeContent = (ev) => {
  this.setState({
    deeds_desc: ev.target.value,
  });
}

showModal = () => {
  this.setState({
    show: true,
  });
}

hideModal = () => {
  this.setState({
    show: false,
  });
}

submit = () => {
  const formData = {
    name: this.state.name,
    email: this.state.email,
    deeds_desc: this.state.text,
  };
  
//Update code to make sure no empty data

  fetch('/api/mongodb/santas_test/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Got this back', data);
    

      // Redirect to blog
      // this.props.history.push('deed-list');
    });
}


  render() {
    return (
      <div className="App">
        <nav className="App-navigation">
        </nav>
        <div className="App-mainContent">
          
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
