import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Otherview from './views/otherview';
import Landing from './views/Landing'
import Sidebar from './components/sidebar/Sidebar'

import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Sidebar />
        <Router>
         <Route exact path='/' component={Landing} />
           <Switch>
             <Route exact path='/otherview' component={Otherview} />
           </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
