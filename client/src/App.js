import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import GlobalStyle from './GlobalStyle';
import ToDoSection from './components/ToDoSection/ToDoSection';
import HomePage from './pages/HomePage';


function App() {
  return (
      <Router>
      <GlobalStyle/>
       <Switch>
       <Route path='/' exact>
       <HomePage/>
       </Route>
       </Switch>
      </Router>
  );
}

export default App;
