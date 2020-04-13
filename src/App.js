import React from 'react';
import { Router } from '@reach/router'
import './App.css';
import Home from './Home';
import { GlobalStyle } from './styles/GlobalStyle';
import Header from './elements/Header';
import NotFound from './NotFound';
import Movie from './Movie';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
