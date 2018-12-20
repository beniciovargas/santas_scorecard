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
        cardList:[],
      }

      updateBase = (ev) => {
        this.setState({
          base: ev.target.value,
        });
        this.fetchDeeds(ev.target.value);
      }

      state = {
          count: 0, 
      }

      addDeed = () => {
          this.setState({
              count: this.state.count + 1,
          });
      }

  render() {
    return (
        <div className="naughtyBar">
        <ul className="naughtyBar">
          {
            Object.keys(this.state.deedPosts).map(key => (
             <li className="naughtyBar" key={key} style={{height: ((this.state.deedPosts)) * 100}}>
              {this.state.deedPosts[key]}
              <br></br>
              {key}
             </li> 
            ))
          }
        </ul>
        
        <div className="niceBar">
        <ul className="niceBar">
          {
            Object.keys(this.state.deedPosts).map(key => (
             <li className="niceBar" key={key} style={{height: ((this.state.deedPosts)) * 100}}>
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

        <div className="naughtyBar">
        <button onClick={this.addDeed}>
            Submit{this.state.count}
            </button>

           
        <div className="niceBar">
        <button onClick={this.addDeed}>
            Submit{this.state.count}
            </button>

        </div>
        </div>
        </div>
        </div>
    
    );
  }
}

export default DeedBar;
