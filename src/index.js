import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BreakingBadHeader from "./components/BreakingBadHeader"
import './index.css';
import App from './App';
import Character from "./components/Character"
import Season from "./components/Season"
import Episode from "./components/Episode"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <div className="container">
      <BreakingBadHeader />
    </div>
    <Switch>
      <Route 
        path="/" exact 
        component={App}
      />
      <Route 
        path="/:series/season/:season" 
        component={Season}
      />
      <Route 
        path="/episode/:episodeId" 
        component={Episode}
      />
      <Route 
        path="/character/:name" 
        component={Character}
      />
    </Switch>
  </Router>
  
  , document.getElementById('root')
);

// <Character name="Walter White" />
// <Episode data={episodeTest} />
// <Season series="Breaking Bad" season="1" /> 

reportWebVitals();
