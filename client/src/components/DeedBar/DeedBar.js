import React, { Component } from 'react';
// import './DeedBar.css';

class DeedBar extends Component {
    state={
        deedPosts:[],
    }
    componentDidMount() {
        console.log('doing thing');
        fetch('/api/mongodb/santas_test/')
          .then(response => response.text())
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
