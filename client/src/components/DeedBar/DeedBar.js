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
          .then(response => response.text())
          .then(data => {
            console.log('Got data back', data);
            this.setState({
              santas_test: data,
            });
          });
      }

      state={
        deedList:[],
      }

      updateBase = (ev) => {
        this.setState({
          base: ev.target.value,
        });
        this.fetchDeeds(ev.target.value);
      }

  render() {
    return (
        <div className="DeedBar">
        <ul className="DeedBar">
          {
            Object.keys(this.state.deedPosts).map(key => (
             <li className="DeedBar" key={key} style={{height: ((this.state.deedPosts)) * 100}}>
              {this.state.deedPosts[key]}
              <br></br>
              {key}
             </li> 
            ))
          }
        </ul>
        
        <select onChange={this.updateBase} value={this.state.base}>
              <option value="Naughty">Naughty</option>
              <option value="Nice">Nice</option>
        </select>
        
        <div className="deedList">
          
        </div>
        
        </div>
    );
  }
}

export default DeedBar;
