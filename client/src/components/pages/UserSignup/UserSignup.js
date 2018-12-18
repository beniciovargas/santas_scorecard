import React, { Component } from 'react';
import './UserSignup.css'

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
        deeds_desc: '',
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

    submit = () => {
        const formData = {
            name: this.state.name,
            email: this.state.email,
            deeds_desc: this.state.text,
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
            <div className="container">

                <div className="row1">
                    <div className="name">Welcome!</div>
                    {/* <img className="santa" src={santa} /> */}
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

                            <button onClick={this.submit}>Submit</button>
                            <br />
                            <p>already signed up?</p>
                            <button onClick={this.showModal}>
                                go to profile </button>
                        </div>
                    </div>
                </div>



                <div className="row3">

                </div>
            </div>



        );
    }
}

export default UserSignup;
