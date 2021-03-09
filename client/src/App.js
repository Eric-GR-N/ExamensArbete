import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import styled from 'styled-components';


function App() {
  return (
      <Router>
        <NavBar/>

        <HeroSection/>
      </Router>
  );
}

export default App;
