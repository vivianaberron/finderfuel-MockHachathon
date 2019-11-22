import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Otherview from './views/otherview';
import LandingView from './views/LandingView';
import Welcome from './views/Welcome';
import About from './views/About/About';
import Advertising from './views/Advertising/Advertising';

import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
           <Switch>
              <Route exact path='/welcome' component={Welcome} />
              <Route exact path='/about' component={About} />
              <Route exact path='/publicity' component={Advertising} />
              <Route exact path='/' component={LandingView} />
              <Route exact path='/otherview' component={Otherview} />
           </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
