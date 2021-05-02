import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import App from './App';
import store from './store';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Route exact path="/">
            <Redirect to="/give-consent" />
          </Route>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

store.subscribe(render);
render();
