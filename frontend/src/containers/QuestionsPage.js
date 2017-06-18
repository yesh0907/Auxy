import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

//Other Components
import Navbar from '../components/navbar';
import SingleQuestion from '../components/questions/single_question';
import GroupMultipleQuestions from '../components/questions/group_multiple_question';
import SymptomStepper from '../components/SymptomStepper';

import '../styles/Questions.css';

class QuestionsPage extends Component {
  componentWillMount() {
    this.props.actions.fetchDiagnosis(this.props.diagnose.currentDiagnosis);
  }

  render() {
    const { diagnose, actions, history } = this.props;
    const { question } = diagnose;

    let questionItem = () => {
      if (question.type === "single") {
        return (
          <SingleQuestion
            question={question}
            diagnose={actions.diagnose}
            d={diagnose}
            history={history}
          />
        );
      }
      // TLDR; TOO LAZY to do.
      // else if (question.type === "group_single") {
      //
      // }
      // else if (question.type === "group_multiple_question") {
      //
      // }
    }

    return (
      <div className="Page">
        <Navbar />
        <SymptomStepper active={'/questions'} />
        <div className="questions-container">
          <h2>Questions</h2>
          {questionItem()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    diagnose: state.diagnose
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
