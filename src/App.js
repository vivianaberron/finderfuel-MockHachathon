import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Otherview from './views/otherview';
import Landing from './views/LandingView';

import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
           <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/otherview' component={Otherview} />
           </Switch>
        </Router>
      </div>
    )
  }
}

export default App;