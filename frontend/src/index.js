import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//React Router import
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import LoginPage from './containers/LoginPage';
import IllnessFeed from './containers/IllnessHistory';
import QuestionsPage from './containers/QuestionsPage';
import Results from './containers/Results';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginPage} />
        <Route path="/results" component={Results} />
        <Route path="/history" component={IllnessFeed} />
        <Route path="/questions" component={QuestionsPage} />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
