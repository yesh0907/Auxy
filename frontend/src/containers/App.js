import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../actions';

//Components
import HomePage from '../components/Homepage';
import Navbar from '../components/Navbar';
//CSS
import '../styles/App.css';

class App extends Component {
  componentWillMount() {
    this.props.actions.fetchUser(this.props.user.user_id);
  }

  render() {
    const { user, actions, history } = this.props;
    return (
      <div className="Page">
        <HomePage user={user} diagnose={actions.diagnose} history={history} active={'/'} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    diagnosis: state.diagnosis
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
