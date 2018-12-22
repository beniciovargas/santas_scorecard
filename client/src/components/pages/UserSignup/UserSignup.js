import React, { Component } from 'react';
import './UserSignup.css';

import Button from '../../Button/Button.js';
import Modal from '../../Modal/Modal.js';

class UserSignup extends Component {

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
    
    submit = () => {
        const formData = {
            name: this.state.name,
            email: this.state.email,
        };

        fetch('/api/user/create/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Got this back', data);
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

    findUser = () => {
            this.props.history.push('profile/' + this.state.email);
 
    }

    render(){
        return (
            <div className="container2">
                <div className="row1">
                    <div className="name" style={{ marginLeft: "325px"}}>SANTA'S SCORECARD</div>
                                    
                </div>

                <div className="login">
                    <form className="title">
                        <p style={{ fontWeight: "bold"}}>CREATE A USER ID</p>
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
                            <Button type="login"  onClick={this.submit}>Submit</Button>
                        </div>
                    
                        <p style={{ fontweight: "bold"}}><br /><br />ALREADY SIGNED UP?</p>
                        <div>
                            <Button type="profile" onClick={this.showModal}>Go to profile</Button>
                        </div>
                            
                            {
                                this.state.showingModal ? (
                                    <Modal onDismiss={this.hideModal}>
                                    <p>Please enter your email:</p>
                                    <input
                                        onChange={this.onChangeEmail}
                                        value={this.state.email}
                                        name="email"/>
                                        <Button type="modal" onClick={this.findUser}>Submit</Button>
                                    
                                    </Modal>
                                ) : null
                            }
                    </form>
                </div>
            
          </div>



        );
    }
}

export default UserSignup;
