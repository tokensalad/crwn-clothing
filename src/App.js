import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  )
}

// class App extends Component {
//   render() {
//     return <HomePage></HomePage>
//   }
// }

export default App;
