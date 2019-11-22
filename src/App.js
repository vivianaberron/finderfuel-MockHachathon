// import React from 'react';
// import './App.css';
// // import HomeContainer from './containers/HomeContainer';
// import NameList from './components/List';
// // const corsproxy = 'https://cors-anywhere.herokuapp.com/';
// // const url = 'https://api-gas-stations-mex.herokuapp.com/gasstations';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <NameList/>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Otherview from './views/otherview';
import Landing from './views/LandingView';
// import NameList from './components/List';

import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Router>
           <Switch>
           {/* //        <NameList/> */}
              <Route exact path='/' component={Landing} />
              <Route exact path='/otherview' component={Otherview} />
           </Switch>
        </Router>
      </div>
    )
  }
}

export default App;