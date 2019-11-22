import React from 'react';
import './App.css';
// import HomeContainer from './containers/HomeContainer';
import NameList from './components/List';
// const corsproxy = 'https://cors-anywhere.herokuapp.com/';
// const url = 'https://api-gas-stations-mex.herokuapp.com/gasstations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NameList/>
      </header>
    </div>
  );
}

export default App;
