import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//React Router import
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import LoginPage from './components/LoginPage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Results from './components/Results';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginPage} />
        <Route path="/results" component={Results} />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
