import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/dashboard' component={Dashboard}/>
          </Switch>
      </div>
    );
  }
}

export default App;
