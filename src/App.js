import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './styles/App.css';
import RegisterPage from './components/RegisterPage/RegisterPage';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          {/* <Route 
            path="/admin"
            component={LoginPage}
          /> */}
          <Route
            path="/register"
            component={RegisterPage}
          />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
