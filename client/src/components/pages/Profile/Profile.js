import React, { Component } from 'react';
import './Profile.css'


class Profile extends Component {
    //METHODS NEEDED:
    // createBars
    // refreshBars
    // newDeeds 
    // get deeds and add them to bottom bar
    // checkbox values (either good or bad) - determines which bar
    // pt values to deeds

    state = {
        deeds_desc: '',
        
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
                <div className="name">"name placeholder"</div>
            </div>

            <div className="row2">
            </div>

            <div className="deeds">
                <div className="card">
                    <div className="form-container">
                        <h4>Let's add a new deed!</h4>

                        <textarea
                            name="deedContents"
                            placeholder="Deed description"
                            value={this.state.details}
                            onChange={this.onChangeContent}
                        />
                        <br />

                        <button onClick={this.submit}>Submit</button>
                    </div>
                </div>
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
                       
                    </div>
                </div>
            </div>
        </div>


        );
    }
}

export default Profile;
