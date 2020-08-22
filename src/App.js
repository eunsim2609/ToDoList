import React, { Component } from 'react';
import DateBox from './components/datebox';
import Addendum from './components/addendum';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="date">
          <DateBox />
          <Addendum />
        </div>
      </div>
    );
  }
}

export default App;
