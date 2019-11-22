import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Otherview from './views/otherview';
import LandingView from './views/LandingView';
import Welcome from './views/WelcomeView';
import PemexView from './views/PemexView';
import NameList from './views/NameList';

import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
           <Switch>
              <Route exact path='/' component={Welcome} />
              <Route exact path='/landing' component={LandingView} />
              <Route exact path='/list' component={NameList} />
              <Route exact path='/pemex' component={PemexView} />
              <Route exact path='/otherview' component={Otherview} />
           </Switch>
        </Router>
      </div>
    )
  }
}

export default App;

