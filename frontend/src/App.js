import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleQuestion from './components/questions/single_question';
import GroupSingleQuestion from './components/questions/group_single_question';
import GroupMultipleQuestion from './components/questions/group_multiple_question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SingleQuestion/>
        <GroupMultipleQuestion/>
      </div>
    );
  }
}

export default App;
