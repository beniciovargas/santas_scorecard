import React, { Component } from 'react';
import './UserSignup.css';

import santa from '../../../images/santa.jpg';
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

    onChangeContent = (ev) => {
        this.setState({
            deeds_desc: ev.target.value,
        });
    }

    showModal = () => {
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
            <div class="container2">
                <div class="row1">
                    <div class="name" style={{ marginleft: "250px"}}>SANTA'S SCORECARD</div>
                <img class={santa} />
                </div>

                <div class="login">
                    <form class="title">
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

                    <button class="submit2" onClick={this.submit}>Submit</button>

                    <p style={{ fontweight: "bold"}}><br /><br />ALREADY SIGNED UP?</p>

                    <button class="profile" onClick={this.showModal}>Go to profile</button>
                    <div>
                        {
                            this.state.showModal ? (
                                <Modal onDismiss={this.hideModal}>
                                <p>Modal contents...</p>
                                <p>More text</p>
                                </Modal>
                            ) : null
                        }
                    </div>
                 </form>
                </div>
            
          </div>



        );
    }
}

export default UserSignup;
