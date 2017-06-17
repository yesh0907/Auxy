import React, { Component } from 'react';
//Other Components
import Navbar from './navbar.jsx';
import SingleQuestion from './questions/single_question';
import GroupMultipleQuestions from './questions/group_multiple_question';
import SymptomStepper from './SymptomStepper';

class QuestionsPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SymptomStepper />
        <SingleQuestion />
        <GroupMultipleQuestions />
      </div>
    );
  }
}

export default QuestionsPage;
