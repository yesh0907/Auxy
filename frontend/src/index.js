import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//React Router import
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
