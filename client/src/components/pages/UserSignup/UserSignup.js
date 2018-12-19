import React, { Component } from 'react';
import './UserSignup.css';


import Modal from '../../Modal/Modal.js';

class UserSignup extends Component {
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
        showingModal: false,
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

    showModal = () => {
        console.log ("yay! im not broken!")
        this.setState({
          showingModal: true,
        });
      }
      
    hideModal = () => {
        this.setState({
          showingModal: false,
        });
      }

    submit = () => {
        const formData = {
            name: this.state.name,
            email: this.state.email,
        };

        //Update code to make sure no empty data

        fetch('/api/mongodb/santas_test/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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
            <div className="container2">
                <div className="row1">
                    <div className="name" style={{ marginleft: "250px"}}>SANTA'S SCORECARD</div>
                                    
                </div>

                <div className="login">
                    <form className="title">
                        <p style={{ fontweight: "bold"}}>CREATE A USER ID</p>
                            <p>Enter email</p>
                            <input
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                rows="1"
                                cols="50"
                            />
                            <br />

                            <p>Enter user name</p>
                            <input
                                name="Username"
                                placeholder="Username"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                            <br /><br />
                        <div>
                            <button className="submit2" onClick={this.submit}>Submit</button>
                        </div>
                    </form>
                    <div>
                        <p style={{ fontweight: "bold"}}><br /><br />ALREADY SIGNED UP?</p>
                        <div>
                            <button className="profile" onClick={this.showModal}>Go to profile</button>
                        </div>
                            
                            {
                                this.state.showingModal ? (
                                    <Modal onDismiss={this.hideModal}>
                                    <p>Please enter your email:</p>
                                    <input
                                        name="email"
                                    />
                                    </Modal>
                                ) : null
                            }
                    </div>
                </div>
            
          </div>



        );
    }
}

export default UserSignup;
