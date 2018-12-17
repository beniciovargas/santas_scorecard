import React, { Component } from 'react';
import './App.css';
import santa from './images/santa.jpg';

import Modal from './components/Modal/Modal.js';
import DeedBar from './components/DeedBar/DeedBar.js';


class App extends Component {
//METHODS NEEDED:
// createBars
// refreshBars
// newDeeds 
// get deeds and add them to bottom bar
// checkbox values (either good or bad) - determines which bar
// pt values to deeds

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
          <div className="container">
            <div className="row1">
              <div className="name">WILLIE</div>
              <img className="santa" src={santa} />
            </div>

            <div className="row2">
            </div>

            <div className="deeds">
              <div className="card">
                <div className="form-container">
                  <h4>Create an Elf Id!</h4>
                  <input
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                  <br />
                  <input
                    name="elf"
                    placeholder="Elf Name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                  />
                  <br /><br />
                  <textarea
                    name="deedContents"
                    placeholder="Deed description"
                    value={this.state.details}
                    onChange={this.onChangeContent}
                  />
                  <br />

                  <button onClick={this.submit}>Submit</button>
                  <button onClick={this.showModal}>
                    Show Modal</button>
                </div>
              </div>
            </div>
            <div>
              {
                this.state.show ? (
                  <Modal onDismiss={this.hideModal}>
                    <p>Please enter email:</p>
                  </Modal>
                ) : null
              }
            </div>

            <div className="chart">
              <div className="bars">
                <div className="naughty">NAUGHTY</div>
                <div className="nice">NICE</div>
              </div>
            </div>

            <div className="row3">
              <div className="card">
                <div className="deed-list">
                  <DeedBar />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
