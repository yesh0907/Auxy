import React, { Component } from 'react';
//Other Components
import Navbar from './navbar.jsx';
import SingleQuestion from './questions/SingleQuestion';
import GroupMultipleQuestions from './questions/GroupMultipleQuestions';

class QuestionsPage extends Component {
  render() {
    return (
      <div>
        <SingleQuestion />
        <GroupMultipleQuestions />
      </div>
    );
  }
}

export default QuestionsPage;
