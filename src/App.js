import React from 'react';
import './App.css';
import Welcome from './Component/Welcome';
import About from './Component/About';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './Component/Login';


function App() {
  return (
    <Router>      
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/"  component={Welcome} />
          <Route exact path="/about"  component={About} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
