import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import User_page from './components/User_page'

class App extends Component {
  render() {
    return (
      <div>
        {/* COMP 42D Add HashRouter */}
        <HashRouter>
          {/* COMP 42G Used Switch with Routes */}
          <Switch>
            {/* COMP 42F Used Route to set a path */}
            {/* COMP 42H Set component to Dashboard */}
            <Route exact path='/' component={Dashboard}/>
            {/* COMP 42J Added user id to match */}
            <Route path='/user_page/:id' component={User_page}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
