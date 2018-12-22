import React, { Component } from 'react';
import './Profile.css'


import Button from '../../Button/Button.js';


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
        deedData: {
            description:'',
            rate: '',
            behavior: '',
        }
    }   

    componentDidMount() {
        console.log("I am working!");
        const encodedEmail = encodeURI(this.props.match.params.email);
        fetch('/api/user/find?email=' + encodedEmail)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data,
                });
            });
    }

    onChangeContent = (ev) => {
        this.setState({
            deedData: ev.target.value,
        });
    }


    submit = () => {
        const formData = {
        
            rate: Number(this.state.rate),
            description: this.state.text,
            behavior: this.state.behavior,
            email: this.props.match.params.email,
        };


        fetch('/api/user/deed-push', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Got this back', data);
            });

        let deedData = {
            description: [],
            behavior: [],
            rate:[],
        }

        for (deedData in deedData) {
            console.log(deedData);
        }
    }

    render() {
        return (
            <div className="container1">

                <div className="row1">
                    <div className="name">{this.props.match.params.email}</div>
                   
                </div>

                <div className="row2">
                </div>

                <div className="deeds">
                    <form className="cardDeeds" onSubmit={this.onSubmitDeed}>
                        
                        <div className="title">
                            <p style={{ fontweight: "bold" }}>LOG YOUR DEED</p>
                            <p>Rate it and weight it:</p>
                        </div>

                        <div className="normal-container">
                            <div className="smile-rating-container">
                                <div className="smile-rating-toggle-container">
                                    <div className="submit-rating">
                                        <input id="meh" name="satisfaction" type="radio" value="naughty" />
                                        <input id="fun" name="satisfaction" type="radio" value="nice" />
                                        <label for="meh" className="rating-label rating-label-naughty">NAUGHTY</label>
                                        <div className="smile-rating-toggle"></div>

                                        <div className="rating-eye rating-eye-left"></div>
                                        <div className="rating-eye rating-eye-right"></div>

                                        <div className="mouth rating-eye-bad-mouth"></div>

                                        <div className="toggle-rating-pill"></div>
                                        <label for="fun" className="rating-label rating-label-nice">NICE</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rating">
                        <label className="rate">
                        1
                            <input type="radio" name="rate" value="1" />
                                 </label>


                        <label className="rate">
                            2
                            <input type="radio" name="rate" value="2" />
                            </label>


                        <label className="rate">
                            3
                            <input type="radio" name="rate" value="3" />
                                </label>

                                </div>


                        <span>
                            <div className="title" style={{ margin: "0 px" }}>
                                Describe your deed here:<br />
                                <textarea id="description" name="description" rows="5" cols="50"></textarea>
                            </div>
                        </span>

                        <div>
                            <Button type="login" onClick={this.submit}>Submit</Button>
                        </div>

                    </form>
                </div>

                <div className="chart">
                    <div className="bars">
                        <div className="naughtyBar">NAUGHTY</div>
                        <div className="niceBar">NICE</div>
                    </div>
                </div>

                <div className="row3">
                    <div className="cardList">
                        <div className="title" style={{ fontweight: "bold" }}>LIST OF DEEDS</div>
                    </div>
                </div>

            </div>



        );
    }
}
export default Profile;
