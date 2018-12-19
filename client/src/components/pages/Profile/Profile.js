import React, { Component } from 'react';
import './Profile.css'

import santa from '../../../images/santa.jpg';


class Profile extends Component {
    //METHODS NEEDED:

    // populate bars  ***
    // toggle button logic/method =>tied to bar ie naughty or nice**
    // Add newDeeds in DB -  submit button needs .then push to DB***
    // .setState
    // .POST
    // .response
    // .display

    // render deeds and add them to bottom bar
    // pt values to deeds - increment onChange 

    //TODO:
    //create components
    //reactify Errin's

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
            <div className="container1">

                <div className="row1">
                    <div className="name">*placeholder*</div>
                    <img className="santa" src = { santa } />
                </div>

                <div className="row2">
                </div>

                <div className="deeds">
                    <div className="cardDeeds">

                        <div className="title">
                            <p style={{fontweight: "bold"}}>LOG YOUR DEED</p>
                            <p>Rate it and weight it:</p>
                        </div>

                        <div className="normal-container">
                            <div className="smile-rating-container">
                                <div className="smile-rating-toggle-container">
                                    <form className="submit-rating">
                                        <input id="meh" name="satisfaction" type="radio" />
                                        <input id="fun" name="satisfaction" type="radio" />
                                        <label for="meh" className="rating-label rating-label-naughty">NAUGHTY</label>
                                        <div className="smile-rating-toggle"></div>

                                        <div className="rating-eye rating-eye-left"></div>
                                        <div className="rating-eye rating-eye-right"></div>

                                        <div className="mouth rating-eye-bad-mouth"></div>

                                        <div className="toggle-rating-pill"></div>
                                        <label for="fun" className="rating-label rating-label-nice">NICE</label>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="rating">
                            <div className="rate">1</div>
                            <div className="rate">2</div>
                            <div className="rate">3</div>
                        </div>

                        <span>
                            <form className="title" style={{margin:"0 px"}}>
                                Describe your deed here:<br />
                                <textarea id="description" name="description" rows="5" cols="50"></textarea>
                            </form>
                        </span>

                        <div className="submit">Submit</div>

                    </div>
                </div>

                <div className="chart">
                    <div className="bars">
                        <div className="naughtyBar">NAUGHTY</div>
                        <div className="niceBar">NICE</div>
                    </div>
                </div>

                <div className="row3">
                    <div className="cardList">
                        <div className="title" style={{fontweight:"bold"}}>LIST OF DEEDS</div>
                    </div>
                </div>

            </div>
        


        );
    }
}

export default Profile;
