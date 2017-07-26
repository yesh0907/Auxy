import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

import HomePage from '../components/Homepage';
import '../styles/App.css';

class App extends Component {
  componentWillMount() {
    const { user, actions } = this.props;
    if (user.id !== 1) {
      actions.fetchUser(this.props.user.id);
    }
  }

  render() {
    const { user, diagnosis, actions, history } = this.props;
    return (
      <div className="Page">
        <HomePage 
          user={user} 
          diagnose={actions.diagnose}
          fetchAllSymptoms={actions.fetchAllSymptoms}
          symptoms={diagnosis.allSymptoms}
          currentSymptoms={diagnosis.symptoms}
          updateSymptoms={actions.updateSymptoms}
          history={history} 
          active={'/'} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    diagnosis: state.diagnose
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
