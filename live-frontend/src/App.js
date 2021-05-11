import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react'
import {connectWithWebSocket} from "./utils/webConnection"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';
import Login from './LoginPage/Login';

function App() {

  useEffect(() => {
    connectWithWebSocket() 
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/" exact component={Login}/>

      </Switch>
    </Router>
  );
}

export default App;
