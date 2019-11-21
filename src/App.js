import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Otherview from './views/otherview';
import Landing from './views/Landing'

import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
         <Route exact path='/' component={Landing} />
         <Switch>

         </Switch>
          <Route exact path='/otherview' component={Otherview} />


        </Router>
      </div>
    )
  }
}

export default App;
