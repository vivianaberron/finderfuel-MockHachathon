import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Otherview from './views/otherview';
import Landing from './views/Landing';
import Welcome from './views/Welcome';

import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
           <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/welcome' component={Welcome} />
              <Route exact path='/otherview' component={Otherview} />
           </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
