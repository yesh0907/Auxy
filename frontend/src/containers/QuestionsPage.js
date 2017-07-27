import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

//Other Components
import Navbar from '../components/Navbar';
import SingleQuestion from '../components/Question/SingleQuestion';
import GroupSingleQuestion from '../components/Question/GroupSingleQuestion';
import GroupMultipleQuestions from '../components/Question/GroupMultipleQuestion';
import SymptomStepper from '../components/Symptom/SymptomStepper';

import '../styles/Questions.css';

class QuestionsPage extends Component {
    componentWillMount() {
        const { actions, diagnose } = this.props;
        actions.fetchDiagnosis(diagnose.currentDiagnosis);
    }
    
    render() {
        const { diagnose, actions, history } = this.props;
        const { question, condition } = diagnose;

        if (condition.length) {
            console.log(condition);
            history.push('/results');
        }

        console.log(question);
        
        let questionItem = () => {
            if (question.type === "single") {
                return (
                    <SingleQuestion
                        question={question}
                        updateDiagnosis={actions.updateDiagnosis}
                        currentDiagnosis={diagnose.currentDiagnosis}
                        history={history}
                    />
                );
            }
            else if (question.type === "group_single") {
                return (
                    <GroupSingleQuestion />
                )
            }
            else if (question.type === "group_multiple_question") {
                return (
                    <GroupMultipleQuestions />
                )
            }
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
