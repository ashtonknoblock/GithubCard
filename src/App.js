import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  user: {},
  active: false
}

clicker = () => {
  this.state.active ===false ? this.setState({active: true}) : this.setState({active: false})
  console.log("you clicked the button!");
  fetch('https://api.github.com/users/ashtonknoblock')
  .then((res) => {
    return res.json();
  })
  .then((jsonData) => {
    this.setState ({user: jsonData})
  })
}

  render() {    
    return (
      <div id='container'>
        <button onClick={this.clicker}>Toggle User</button>
          {this.state.active === true &&
          <div id="div">
              <div class='userInfo'>{this.state.user.name}</div>
              <div><img src = {this.state.user.avatar_url} alt='Ashton'></img></div>
              <div class='userInfo'>{this.state.user.bio}</div>
              <div class='userInfo'>{this.state.user.location}</div>
          </div>
      }
      </div>
    );
  }
}

export default App;
