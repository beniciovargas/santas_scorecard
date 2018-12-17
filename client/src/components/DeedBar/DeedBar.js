import React, { Component } from 'react';
// import './DeedBar.css';

class DeedBar extends Component {
    state={
        deedPosts:[],
    }

// trying to figure out how to get data from mongo to load here
//changed .json to .text so page wouldnt break but needs to be changed
    componentDidMount() {
        console.log('doing thing');
        fetch('/api/mongodb/santas_test/')
          .then(response => response.json())
          .then(data => {
            console.log('Got data back', data);
            this.setState({
              santas_test: data,
            });
          });
      }

  render() {
    return (
        <div className="DeedBar">

        
        </div>
    );
  }
}

export default DeedBar;
