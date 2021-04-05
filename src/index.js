import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Character from "./components/Character"
import Season from "./components/Season"
import Episode from "./components/Episode"
import reportWebVitals from './reportWebVitals';

const episodeTest = {
  air_date: "2008-01-27T00:00:00.000Z",
  characters: [
    "Walter White", 
    "Jesse Pinkman", 
    "Skyler White", 
    "Walter White Jr.", 
    "Domingo Molina"
  ],
  episode: 2,
  episode_id: 2,
  season: "1",
  series: "Breaking Bad",
  title: "Cat's in the Bag..."
}


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// <Character name="Walter White" />
// <Episode data={episodeTest} />
// <Season series="Breaking Bad" season="1" /> 
reportWebVitals();
