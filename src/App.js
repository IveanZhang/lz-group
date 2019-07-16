import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './containers/Home/Home';
import About from './containers/About/index'


function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
